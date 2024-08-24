import { useContext, useEffect } from "react";
import { QuizContext } from "../Context";

const Timer = () => {
  const { dispatch, state } = useContext(QuizContext);
  useEffect(() => {
    const timee = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timee);
  }, [dispatch]);
  return (
    <div className="border p-3 rounded-xl font-bold">
      {Math.floor(state.timeRemaining / 60)}:{" "}
      {state.timeRemaining % 60 < 10
        ? `0${state.timeRemaining % 60}`
        : state.timeRemaining % 60}
    </div>
  );
};

export default Timer;
