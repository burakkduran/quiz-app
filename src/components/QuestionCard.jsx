/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

const QuestionCard = ({
  questionData,
  score,
  setScore,
  count,
  setcount,
  amount,
  setModal,
}) => {
  const [timer, setTimer] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);
  const showNextButton = isAnswered ? "block" : "hidden";

  const approvedChoice = (e) => {
    if (questionData[count]?.correct_answer === e.target.value) {
      setScore(score + 100);
      e.target.classList.add("animate-bounce", "bg-green-500");
    } else {
      e.target.classList.add("bg-red-500", "animate-pulse");
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        if (button.value === questionData[count]?.correct_answer) {
          e.target.classList.remove("bg-violet-800");
          button.classList.add("animate-bounce", "bg-green-500");
        }
      });
    }

    setIsAnswered(true);
  };

  const nextQuestion = () => {
    setIsAnswered(false);

    setcount(count + 1);
    if (count === amount - 1) {
      setModal(true);
    }
    setTimer(30);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove(
        "animate-bounce",
        "animate-pulse",
        "bg-green-500",
        "bg-red-500"
      );
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      setcount(count + 1);
      if (count === amount - 1) {
        setModal(true);
      }
      setTimer(30);
    }
    return () => clearInterval(interval);
  }, [timer, count, setcount, amount, setModal]);

  return (
    <div className="container flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-full bg-gray-950 py-32 rounded-3xl">
        <div className="w-3/4 flex items-center gap-4 mb-6">
          <div className="bg-violet-200 w-12 h-12 rounded-full text-black text-lg flex items-center justify-center flex-shrink-0">
            {timer}
          </div>
          <div className="text-white text-2xl grow">
            <span className="text-violet-700 ">Category:</span>{" "}
            {questionData[count]?.category}
          </div>
          <div className="text-2xl text-white">Score: <span className="text-violet-400">{score}</span></div>
        </div>

        <div className="flex items-center text-2xl text-white gap-4 border-b border-t border-r pr-3 px-3 rounded-br-xl rounded-tr-xl border-l-2 border-l-white border-violet-500 mb-12 w-3/4 h-full sm:h-24 md:h-16 ">
          <div className="w-12 h-12 rounded-full text-white text-2xl flex items-center justify-center flex-shrink-0">
            {count + 1}/{amount}
          </div>

          {questionData[count]?.question}
        </div>

        <div className="flex gap-6 flex-wrap justify-center items-center max-w-2xl">
          {questionData[count]?.answers.map((answer, i) => (
            <button
              className=" text-xl hover:bg-violet-200 hover:text-violet-800 transition duration-200 border-violet-800 text-white w-64 py-2 border border-transparent rounded-xl "
              key={i}
              value={answer}
              onClick={approvedChoice}
              {...(isAnswered && { disabled: true })}
            >
              {answer}
            </button>
          ))}
        </div>
        <div className={`mt-8 h-8`}>
          <button
            className={`bg-yellow-400 text-xl hover:bg-violet-200 transition duration-200 hover:border hover:border-violet-800 text-white hover:text-black w-64 py-2 border border-transparent rounded-xl ${showNextButton}`}
            onClick={nextQuestion}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
