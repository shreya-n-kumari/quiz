import React from "react";
import "../App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const Slide = () => {
  const navigate = useNavigate();

  const goToQuizReady = () => {
    navigate("/quiz-ready");
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "orange" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "orange" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: "unslick",
      },
    ]
  };
  return (
    <>
      <div className="mx-10 mb-10">
        <h1 className="mt-16 mb-10 text-3xl md:text-5xl font-bold">
          Computer science
        </h1>
        <Slider {...settings}>
          <button className="box-border px-4 pb-8 mx-8" onClick={goToQuizReady}>
            <img src="quiz-ready.jpeg" alt="..." style={{ width: "100%" }} />
            <p className="pt-2 text-lg font-normal">Computer Science Quiz</p>
          </button>

          <div className="box-border px-4 pb-8 mx-8">
            <img src="quiz-ready.jpeg" alt="..." style={{ width: "100%" }} />
            <p className="pt-2 text-lg font-normal">Lorem ipsum dolor sit amet</p>
          </div>

          <div className="box-border px-4 pb-8 mx-8">
            <img src="quiz-ready.jpeg" alt="..." style={{ width: "100%" }} />
            <p className="pt-2 text-lg font-normal">Lorem ipsum dolor sit amet</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Slide;
