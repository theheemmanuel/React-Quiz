/* eslint-disable react/prop-types */

const Progress = ({
  points,
  numberQuestions,
  questno,
  totalPoints,
  answer,
}) => {
  return (
    <>
      <progress
        max={numberQuestions}
        value={questno + Number(answer !== null)}
        className="w-full overflow-hidden"
      />
      <div className="flex justify-between">
        <p>
          Question {questno + 1} of {numberQuestions}
        </p>
        <p>
          {points} points/{totalPoints}
        </p>
      </div>
    </>
  );
};

export default Progress;
