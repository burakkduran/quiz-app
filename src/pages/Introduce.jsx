import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { category, difficulty, amount } from "../components/ArrayList";

const Introduce = () => {
  const [categoryChange, setCategoryChange] = useState(0);
  const [difficultyChange, setDifficultyChange] = useState("easy");
  const [amountChange, setAmountChange] = useState(5);

  const navigate = useNavigate();

  const startQuiz = () => {
    navigate(`/quiz/${categoryChange}/${difficultyChange}/${amountChange}`);
  };

  return (
    <>
      <div className=" bg-gradient-to-t from-violet-200 to-violet-400 min-h-screen flex flex-col items-center py-16">
        <img
          src={Logo}
          className="w-56 h-56w-56 sm:w-96 sm:h-96"
          alt="Quiz Logo"
        />
        <div className="flex gap-x-6 sm:gap-x-16 gap-y-3 sm:gap-y-6 flex-wrap max-w-lg justify-center bg-violet-100 p-6 rounded-2xl">
          <Dropdown
            label={"Category"}
            options={category}
            setChange={setCategoryChange}
          />
          <Dropdown
            label={"Difficulty"}
            options={difficulty}
            setChange={setDifficultyChange}
          />
          <Dropdown
            label={"Question Number"}
            options={amount}
            setChange={setAmountChange}
          />
        </div>

        <button
          onClick={startQuiz}
          className="mt-14 bg-violet-700 hover:bg-violet-500 text-white py-3 px-4 rounded-lg text-2xl transition duration-300"
        >
          Start quiz
        </button>
      </div>
    </>
  );
};

export default Introduce;
