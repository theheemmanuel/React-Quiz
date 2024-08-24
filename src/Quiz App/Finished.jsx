import { useContext } from "react";
import { QuizContext } from "../Context";

const FInished = () => {
  const { state, dispatch, emoji, totalPoints, Percentage } =
    useContext(QuizContext);
  return (
    <div>
      <div className="text-center font-bold bg-green-800 rounded-2xl py-4 text-2xl mt-8 w-fit mx-auto px-6">
        <h1>
          {emoji}
          You scored {state.points} out of {totalPoints}({Percentage}%)
        </h1>
      </div>
      <p className="font-bold text-center mt-7">
        (Highscore: {state.highscore} points)
      </p>
      <div className="text-center mt-7">
        <button
          onClick={() => dispatch({ type: "restart" })}
          className="border rounded-2xl px-4 py-2 bg-gray-300 text-black font-bold"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default FInished;
