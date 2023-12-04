/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchQuizData } from "../api/api";
import QuestionCard from "../components/QuestionCard";
import Results from "../components/Results";

const Quiz = () => {
  const { category, difficulty, amount } = useParams();

  const [questionData, setQuestionData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchQuizData(amount, category, difficulty);
        setQuestionData(data);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [amount, category, difficulty]);

  return (
    <div className="bg-gradient-to-t from-violet-200 to-violet-400 h-screen flex justify-center items-center">
      {
        loading ? (
          <div className="text-white font-bold text-4xl">Loading...</div>
        ) : isAnswered ? (
          <Results score={score} />
        ) : (
          <QuestionCard
            questionData={questionData}
            score={score}
            setScore={setScore}
            count={count}
            setcount={setCount}
            amount={amount}
            isAnswered={isAnswered}
            setIsAnswered={setIsAnswered}
          />
        )
        

        
      }
    </div>
  );
};

export default Quiz;
