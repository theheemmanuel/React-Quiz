/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Timer = ({ dispatch, timeRemaining }) => {
  useEffect(() => {
    const timee = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(timee);
  }, [dispatch]);
  return (
    <div className="border p-3 rounded-xl font-bold">
      {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}
    </div>
  );
};

export default Timer;
