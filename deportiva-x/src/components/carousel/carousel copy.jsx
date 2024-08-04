/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './carousel.css';
import { useNavigate } from 'react-router-dom';

function Responsive(props) {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section id="main-all">
        <h1 className="title-slider">{props.title}</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {props.products && props.products.length > 0 ? (
              props.products.map((product) => (
                <div key={product.idProductos} className="img-contain">
                  <a onClick={() => handleProductClick(product.idProductos)}>
                    <img src={product.imagen} alt={product.nombre} />
                  </a>
                </div>
              ))
            ) : (
              <div>No products found.</div>
            )}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Responsive;
