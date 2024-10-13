import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import html from '../img/html.svg'
import css from '../img/css3.svg'
import js from '../img/js.svg'
import tailwind from '../img/tailwind.svg'
import react from '../img/react.svg'
import webpack from '../img/webpack.svg'
import gulp from '../img/gulp.svg'

function SwipeToSlide() {
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 100,
    cssEase: "linear",
    variableWidth: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      }
    ]
  };

  const style = {
    marginTop: '30px'
  }
  
  return (
    <section id="slider" className="slider lg:h-full	flex flex-col">
      <div className="slider-container my-11 mx-auto w-full lg:w-3/4 ">
      <h1 className="slider-title text-3xl lg:text-5xl font-bold uppercase text-center ml-auto mr-auto">Мой стек технологий</h1>
        <Slider style={style} {...settings}>
          <div style={{ width: 200 }}> {/* Corrected syntax */}
            <img src={html} alt="HTML5" className="w-full h-auto" />
            <h1 className="text-center uppercase text-2xl	 font-semibold	pt-1.5	">HTML5</h1>
          </div>
          <div style={{ width: 200 }}> {/* Corrected syntax */}
            <img src={css} alt="CSS3" className="w-full h-auto" />
            <h1 className="text-center uppercase text-2xl	 font-semibold	pt-1.5	">CSS3</h1>
          </div>
          <div style={{ width: 200 }}> {/* Corrected syntax */}
            <img src={js} alt="JavaScript" className="w-full h-auto" />
            <h1 className="text-center uppercase text-2xl	 font-semibold	pt-1.5	">JavaScript</h1>
          </div>
          <div style={{ width: 200 }}> {/* Corrected syntax */}
            <img src={react} alt="React" className="w-full h-auto" />
            <h1 className="text-center uppercase text-2xl	 font-semibold	pt-1.5	">React</h1>
          </div>
          <div style={{ width: 200 }}> {/* Corrected syntax */}
            <img src={tailwind} alt="Tailwind" className="w-full h-auto" />
            <h1 className="text-center uppercase text-2xl	 font-semibold	pt-1.5	">Tailwind</h1>
          </div>
          <div style={{ width: 200 }}> {/* Corrected syntax */}
            <img src={webpack} alt="Webpack" className="w-full h-auto" />
            <h1 className="text-center uppercase text-2xl	 font-semibold	pt-1.5	">Webpack</h1>
          </div>
          <div style={{ width: 200 }}> {/* Corrected syntax */}
            <img src={gulp} alt="Gulp" className="w-full h-auto" />
            <h1 className="text-center uppercase text-2xl	 font-semibold	pt-1.5	">Gulp</h1>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default SwipeToSlide;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "none"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "none"}}
      onClick={onClick}
    />
  );
}