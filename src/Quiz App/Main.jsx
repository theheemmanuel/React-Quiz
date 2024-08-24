import StartScreen from "./StartScreen";
import Question from "./Question";
import { useContext } from "react";
import { QuizContext } from "../Context";
import Finished from "./Finished";

const Main = () => {
  const { state } = useContext(QuizContext);
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
      {state.status === "ready" && <StartScreen />}
      {state.status === "active" && <Question />}
      {state.status === "finished" && <Finished />}
    </div>
  );
};

export default Main;
