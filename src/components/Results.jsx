/* eslint-disable react/prop-types */

const Results = ({ score }) => {
  return (
    <div className="flex flex-col justify-center items-center pb-32">
      <div className="text-white font-bold text-4xl">Your score is: {score}</div>
      <button
        className="bg-violet-800 text-xl hover:bg-violet-200 hover:text-violet-800 transition duration-200 hover:border hover:border-violet-800 text-white w-64 h-12 rounded-xl mt-16"
        onClick={() => (window.location = "/")}
      >
        Start Again
      </button>
    </div>
  );
};

export default Results;
