import { useContext } from "react";
import Options from "./Options";
import Progress from "./Progress";
import Timer from "./Timer";
import { QuizContext } from "../Context";

const Question = () => {
  const { state, dispatch, NumberQuestions } = useContext(QuizContext);
  return (
    <div className="max-w-[800px] mx-auto">
      <Progress />
      <Options />
      <div className="flex justify-between mt-8">
        <div>
          {state.answer !== null && (
            <button
              className="border p-3 rounded-xl bg-gray-200 text-black font-bold"
              onClick={() =>
                state.index === NumberQuestions - 1
                  ? dispatch({ type: "finished" })
                  : dispatch({ type: "next" })
              }
            >
              {state.index === NumberQuestions - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          )}
        </div>
        <Timer />
      </div>
    </div>
  );
};

export default Question;
