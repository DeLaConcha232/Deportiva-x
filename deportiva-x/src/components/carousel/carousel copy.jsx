import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './carousel.css';
import { useNavigate } from 'react-router-dom';

function Carousel({ title, productos = [], onClick }) {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const settings = {
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

  if (!productos || productos.length === 0) {
    return <p>No products to display</p>;
  }

  return (
    <section id="main-all">
      <h1 className="title-slider">{title}</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {productos.map((producto) => (
            <div key={producto.id} className="img-contain">
              <a onClick={() => handleProductClick(producto.id)}>
                <img src={producto.img} alt="" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Carousel;
