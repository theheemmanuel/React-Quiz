/* eslint-disable react/prop-types */
import { useEffect, useReducer, createContext } from "react";
import Reducer from "./Reducer";

export const QuizContext = createContext();

export default function ContextProvider({ children }) {
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
    <QuizContext.Provider
      value={{
        state,
        dispatch,
        NumberQuestions,
        emoji,
        totalPoints,
        Percentage,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
