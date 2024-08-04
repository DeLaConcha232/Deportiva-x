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

  // Configuración condicional para el carrusel
  const getCarouselSettings = (numProducts, isWishlist) => {
    // Determina si el carrusel debería ser infinito basándose en el número de productos
    const isInfinite = numProducts > 2 && !isWishlist;

    return {
      dots: true,
      infinite: isInfinite,
      speed: 500,
      slidesToShow: numProducts === 1 ? 1 : (isWishlist ? 2 : 4),
      slidesToScroll: numProducts === 1 ? 1 : (isWishlist ? 2 : 4),
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: numProducts === 1 ? 1 : (isWishlist ? 2 : 3),
            slidesToScroll: numProducts === 1 ? 1 : (isWishlist ? 2 : 3),
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: numProducts === 1 ? 1 : (isWishlist ? 1 : 2),
            slidesToScroll: numProducts === 1 ? 1 : (isWishlist ? 1 : 2),
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: numProducts === 1 ? 1 : (isWishlist ? 1 : 2),
            slidesToScroll: numProducts === 1 ? 1 : (isWishlist ? 1 : 1),
          }
        }
      ]
    };
  };

  const numProducts = props.products ? props.products.length : 0;
  const settings = getCarouselSettings(numProducts, props.isWishlist);

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

function Carousel(props) {
  return (
    <Responsive
      title={props.title}
      products={props.products}
      isWishlist={props.isWishlist}
    />
  );
}

export default Carousel;
