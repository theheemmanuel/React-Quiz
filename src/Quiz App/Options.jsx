import { useContext } from "react";
import { QuizContext } from "../Context";

const Options = () => {
  const { state, dispatch } = useContext(QuizContext);
  const currentQuestion = state.questions[state.index];
  return (
    <div>
      <h1 className="font-bold text-2xl">{currentQuestion.question}</h1>
      <div className="">
        {currentQuestion.options.map((each, index) => (
          <button
            key={each}
            disabled={state.answer !== null}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={`font-semibold text-lg block p-4 rounded-2xl w-1/2 text-left bg-gray-600 my-3 border-2 border-gray-600 duration-300 ${
              state.answer === index ? "ml-4" : ""
            } ${
              state.answer !== null
                ? index === currentQuestion.correctOption
                  ? "bg-green-500"
                  : "bg-red-500"
                : "hover:ml-4 hover:bg-transparent"
            }`}
          >
            {each}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
