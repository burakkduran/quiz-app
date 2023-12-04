/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

const QuestionCard = ({
  questionData,
  score,
  setScore,
  count,
  setcount,
  amount,
  setIsAnswered,
}) => {
  const [timer, setTimer] = useState(30);

  const approvedChoice = (e) => {
    if (questionData[count]?.correct_answer === e.target.value) {
      setScore(score + 100);
    }
    setcount(count + 1);
    setTimer(30);
    if (count === amount - 1) {
      setIsAnswered(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      setcount(count + 1);
      setTimer(30);
    }
    if (count === amount - 1) setIsAnswered(true);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="mb-32 flex flex-col items-center">
      <div className="bg-violet-950 w-12 h-12 rounded-full text-white text-lg flex items-center justify-center place-self-start ">
        {timer}
      </div>
      <div className="flex items-center text-2xl gap-4 border-b border-r pr-3 pb-3 rounded-br-xl border-violet-500 mb-12 max-w-4xl w-3/4 sm:w-full">
        <div className="w-12 h-12 rounded-full text-black text-2xl flex items-center justify-center flex-shrink-0">
          {count + 1}/{amount}
        </div>

        {questionData[count]?.question}
      </div>

      <div className="flex gap-6 flex-wrap justify-center items-center max-w-2xl">
        {questionData[count]?.answers.map((answer, i) => (
          <button
            className="bg-violet-800 text-xl hover:bg-violet-200 hover:text-violet-800 transition duration-200 hover:border hover:border-violet-800 text-white w-64 h-12 rounded-xl "
            key={i}
            value={answer}
            onClick={approvedChoice}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
