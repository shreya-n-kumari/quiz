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

  const goToReactQuiz = () =>{
    navigate("/reactquiz");
  }

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
        <h2 className="mt-16 mb-10 text-2xl md:text-5xl font-medium">
            Choose Your Topic Here
        </h2>
        <Slider {...settings}>
          <button className="box-border px-4 pb-8 mx-8" onClick={goToQuizReady}>
            <img src="quiz-ready.jpeg" alt="..." style={{ width: "100%" }} />
            <p className="text-lg font-normal border-2 border-[#cab577] rounded-3xl mt-3">Computer Science Quiz</p>
          </button>

          <button className="box-border px-4 pb-8 mx-8" onClick={goToReactQuiz}>
            <img src="quiz-ready.jpeg" alt="..." style={{ width: "100%" }} />
            <p className="text-lg font-normal border-2 border-[#cab577] rounded-3xl mt-3">React Js Quiz</p>
          </button>

          <div className="box-border px-4 pb-8 mx-8">
            <img src="quiz-ready.jpeg" alt="..." style={{ width: "100%" }} />
            <p className="text-lg font-normal border-2 border-[#cab577] rounded-3xl mt-3">Coming Soon...</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Slide;
