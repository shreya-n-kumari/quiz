import React from "react";
import { useNavigate } from "react-router-dom";


const QuizReady = () => {

  const navigate = useNavigate()

  const goToQuestion = () =>{
    navigate("/questions")
  }
  return (
    <>
      <div className="bg-gradient-to-b from-orange-300">
        <div className="py-12 flex flex-col justify-start items-center ">
        <img src="quesmark.png" />
        <h1 className="mb-3 font-serif text-xl">Computer Science Basic Ques</h1>
        <p className="mb-4 font-serif text-xl">Answer these question correctly</p>
        <div className="flex space-x-8 mb-4">
          <h3 className="font-serif text-xl">Difficulty Level</h3>
          <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Easy</button>
          </div>
          <p className="mb-4 font-serif text-xl">5 Questions</p>
          <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-xl text-sm px-24 py-2 text-center me-2 mb-2" onClick={goToQuestion}>Play</button>
          </div>
      </div>
    </>
  );
};

export default QuizReady;
