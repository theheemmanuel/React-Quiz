import { useContext } from "react";
import { QuizContext } from "../Context";

const Progress = () => {
  const { state, totalPoints, NumberQuestions } = useContext(QuizContext);
  return (
    <>
      <progress
        max={NumberQuestions}
        value={state.index + Number(state.answer !== null)}
        className="w-full overflow-hidden"
      />
      <div className="flex justify-between">
        <p>
          Question {state.index + 1} of {NumberQuestions}
        </p>
        <p>
          {state.points} points/{totalPoints}
        </p>
      </div>
    </>
  );
};

export default Progress;
