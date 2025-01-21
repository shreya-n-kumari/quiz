import React, { useState } from "react";

const questions = [
  {
    question: "Which language runs in a web browser?",
    answerOptions: [
      { answer: "Java", isCorrect: false },
      { answer: "C", isCorrect: false },
      { answer: "Python", isCorrect: false },
      { answer: "JavaScript", isCorrect: true },
    ],
  },
  {
    question: "What does CSS stand for?",
    answerOptions: [
      { answer: "Central Style Sheets", isCorrect: false },
      { answer: "Cascading Style Sheets", isCorrect: true },
      { answer: "Cascading Simple Sheets", isCorrect: false },
      { answer: "Cars SUVs Sailboats", isCorrect: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answerOptions: [
      { answer: "Hypertext Markup Language", isCorrect: true },
      { answer: "Hypertext Markdown Language", isCorrect: false },
      { answer: "Hyperloop Machine Language", isCorrect: false },
      {
        answer: "Helicopters Terminals Motorboats Lamborginis",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What year was JavaScript launched?",
    answerOptions: [
      { answer: "1996", isCorrect: false },
      { answer: "1995", isCorrect: true },
      { answer: "1994", isCorrect: false },
      { answer: "none of the above", isCorrect: false },
    ],
  },
];

const Ques = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(0);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const NextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
      <div
        className="py-12 flex flex-col justify-start items-center"
        style={{ backgroundImage: 'url("bg-image.jpeg")', height:"100vh"}}
      >
        <div className="shadow-md bg-white px-20 py-10 rounded-lg">
          <h1 className="text-xl pb-6 font-serif">Quiz Start</h1>
          {showScore ? (
            <div>
              {" "}
              You Scored {score} of {questions.length}{" "}
            </div>
          ) : (
            <div>
              <div className="pb-6">
                <h2 className="h-6 bg-orange-300 text-lg text-center w-auto font-serif">
                  question {currentQuestion + 1} of {questions.length}
                </h2>
              </div>
              <div>
                <div className="mb-3">
                  {questions[currentQuestion].question}
                </div>
                {questions[currentQuestion].answerOptions.map(
                  (option, index) => (
                    <ul>
                      <li
                        onClick={() =>
                          handleAnswerOption(index, option.isCorrect)
                        }
                        className={`border border-orange-300 rounded-2xl pl-6 py-2 mb-2 cursor-pointer ${
                          answered
                            ? option.isCorrect
                              ? "bg-orange-300"
                              : selectedAnswer === index
                              ? "bg-red-500"
                              : ""
                            : ""
                        }`}
                      >
                        {option.answer}
                      </li>
                    </ul>
                  )
                )}
              </div>
              <button
                className={`${
                  answered ? "bg-orange-300" : "bg-orange-200"
                } font-serif px-20 md:px-40 rounded-md text-xl`}
                onClick={NextQuestion}
                disabled={answered ? "" : "disabled"}
              >
                Next
              </button>
            </div>
          )}
          {showScore ? (
            <button
              className="font-serif px-16 md:px-40 rounded-md text-xl bg-orange-300 mt-3"
              onClick={reset}
            >
              Reset
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Ques;
