/* eslint-disable react/prop-types */

import Options from "./Options";
import Progress from "./Progress";
import Timer from "./Timer";

const Question = ({
  question,
  dispatch,
  questno,
  answer,
  points,
  numberQuestions,
  totalPoints,
  timeRemaining,
}) => {
  return (
    <div className="max-w-[800px] mx-auto">
      <Progress
        points={points}
        numberQuestions={numberQuestions}
        questno={questno}
        totalPoints={totalPoints}
        answer={answer}
      />
      <Options
        dispatch={dispatch}
        question={question}
        questno={questno}
        answer={answer}
      />
      <div className="flex justify-between mt-8">
        <div>
          {answer !== null && (
            <button
              className="border p-3 rounded-xl bg-gray-200 text-black font-bold"
              onClick={() =>
                questno === numberQuestions - 1
                  ? dispatch({ type: "finished" })
                  : dispatch({ type: "next" })
              }
            >
              {questno === numberQuestions - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          )}
        </div>
        <Timer dispatch={dispatch} timeRemaining={timeRemaining} />
      </div>
    </div>
  );
};

export default Question;
