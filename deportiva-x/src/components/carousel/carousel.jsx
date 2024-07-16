/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './carousel.css'
function Responsive(props) {
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
            <div className="img-contain">
              <a href="">
                <img src={props.uno} alt="" />
              </a>
            </div>
            <div className="img-contain">
              <a href="">
                <img src={props.dos} alt="" />
              </a>
            </div>
            <div className="img-contain">
              <a href="">
                <img src={props.tres} alt="" />
              </a>
            </div>
            <div className="img-contain">
              <a href="">
                <img src={props.cuatro} alt="" />
              </a>
            </div>
            <div className="img-contain">
              <a href="">
                <img src={props.cinco} alt="" />
              </a>
            </div>
            <div className="img-contain">
              <a href="">
                <img src={props.seis} alt="" />
              </a>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Responsive;


