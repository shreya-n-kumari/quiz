import React, { useState } from "react";
import { QuizData } from "../assets/QuizData";

const Ques = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(QuizData[index]);
  let [selected, setSelected] = useState(null); // To track the selected option
  let [isAnswered, setIsAnswered] = useState(false); // Track if an answer has been selected

  const checkAns = (e, ans) => {
    if (!isAnswered) {
      setSelected(ans); // Store the selected answer
      setIsAnswered(true); // Mark the question as answered
    }
  };

  const handleNext = () => {
    if (index < QuizData.length - 1) {
      setIndex(index + 1);
      setQuestion(QuizData[index + 1]);
      setSelected(null); // Reset selected answer for the next question
      setIsAnswered(false); // Allow new selection for the next question
    }
  };

  const getOptionClass = (ans) => {
    if (!isAnswered) {
      return "border border-orange-300 rounded-2xl pl-6 py-2 mb-2 cursor-pointer"; // Default style if no answer yet
    }
    
    if (question.ans === ans) {
      return "border-green-400 bg-green-100 border-2 rounded-2xl pl-6 py-2 mb-2"; // Correct answer
    }

    if (selected === ans) {
      return "border-red-400 bg-red-100 border-2 rounded-2xl pl-6 py-2 mb-2"; // Wrong answer
    }

    return "border border-orange-300 rounded-2xl pl-6 py-2 mb-2"; // Unselected
  };

  return (
    <>
      <div
        className="py-12 flex flex-col justify-start items-center"
        style={{ backgroundImage: 'url("bg-image.jpeg")' }}
      >
        <div className="shadow-md bg-white px-20 py-10 rounded-lg">
          <h1 className="text-xl pb-6 font-serif">Quiz Start</h1>
          <div className="pb-6">
            <h2 className="h-6 bg-orange-300 text-lg text-center w-auto font-serif">
              {index + 1} of {QuizData.length} questions
            </h2>
          </div>
          <div className="pb-8">
            <h1 className="text-xl font-serif">{index + 1}. {question.question}</h1>
            <ul>
              <li className={getOptionClass(1)} onClick={(e) => checkAns(e, 1)}>
                {question.option1}
              </li>
              <li className={getOptionClass(2)} onClick={(e) => checkAns(e, 2)}>
                {question.option2}
              </li>
              <li className={getOptionClass(3)} onClick={(e) => checkAns(e, 3)}>
                {question.option3}
              </li>
              <li className={getOptionClass(4)} onClick={(e) => checkAns(e, 4)}>
                {question.option4}
              </li>
            </ul>
          </div>
          <button className="bg-orange-300 font-serif px-40 rounded-md text-xl" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Ques;
