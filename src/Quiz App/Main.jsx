import { useEffect, useReducer } from "react";
import Reducer from "../Reducer";
import StartScreen from "./StartScreen";
import Question from "./Question";

const Main = () => {
  const Initialstate = {
    status: "loading",
    questions: [],
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    timeRemaining: null,
  };
  const [state, dispatch] = useReducer(Reducer, Initialstate);
  const NumberQuestions = state.questions.length;
  const totalPoints = state.questions.reduce(
    (prev, current) => prev + current.points,
    0
  );
  const Percentage = ((state.points / totalPoints) * 100).toFixed(0);
  let emoji;
  if (Percentage === 100) emoji = "";
  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "Questions", payload: data });
      })
      .catch((err) => dispatch({ type: "failed", payload: err }));
  }, []);
  return (
    <div className="text-white">
      {state.status === "loading" && (
        <p className="text-gray-700 bg-gray-200 w-fit mx-auto px-6 mt-6 rounded-xl py-2 font-semibold text-2xl">
          Please hold on while your questions are loading...
        </p>
      )}
      {state.status === "failed" && (
        <p className="text-gray-700 bg-gray-200 w-fit mx-auto px-6 mt-6 rounded-xl py-2 font-semibold text-2xl">
          An error occured while fetching questions...
        </p>
      )}
      {state.status === "ready" && (
        <StartScreen
          NumberQuestions={NumberQuestions}
          dispatch={() => dispatch({ type: "start" })}
        />
      )}
      {state.status === "active" && (
        <Question
          question={state.questions[state.index]}
          dispatch={dispatch}
          questno={state.index}
          answer={state.answer}
          points={state.points}
          numberQuestions={NumberQuestions}
          totalPoints={totalPoints}
          timeRemaining={state.timeRemaining}
        />
      )}
      {state.status === "finished" && (
        // {state.status === "ready" && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Main;
