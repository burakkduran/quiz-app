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
    if (count === amount - 1) {
      setIsAnswered(true);
    }
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      setcount(count + 1);
      if (count === amount - 1) {
        setIsAnswered(true);
      }
      setTimer(30);
    }
    return () => clearInterval(interval);
  }, [timer, count, setcount, amount , setIsAnswered]);

  return (
    <div className="container flex flex-col items-center justify-center ">
      <div className="w-3/4 flex items-center gap-4 mb-6">
        <div className="bg-violet-950 w-12 h-12 rounded-full text-white text-lg flex items-center justify-center flex-shrink-0">
          {timer}
        </div>
        <div className="text-white text-2xl">
          <span className="text-slate-900">Category:</span>{" "}
          {questionData[count]?.category}
        </div>
      </div>

      <div className="flex items-center text-2xl gap-4 border-b border-t border-r pr-3 px-3 rounded-br-xl rounded-tr-xl border-l-2 border-l-black border-violet-500 mb-12 w-3/4 h-full sm:h-24 md:h-16">
        <div className="w-12 h-12 rounded-full text-black text-2xl flex items-center justify-center flex-shrink-0">
          {count + 1}/{amount}
        </div>

        {questionData[count]?.question}
      </div>

      <div className="flex gap-6 flex-wrap justify-center items-center max-w-2xl">
        {questionData[count]?.answers.map((answer, i) => (
          <button
            className="bg-violet-800 text-xl hover:bg-violet-200 hover:text-violet-800 transition duration-200 hover:border hover:border-violet-800 text-white w-64 py-2 border border-transparent rounded-xl "
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
