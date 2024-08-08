/* eslint-disable react/prop-types */

const StartScreen = ({ NumberQuestions, dispatch }) => {
  return (
    <div className="text-center text-gray-300 my-6 font-semibold">
      <h1 className="text-[50px]">Welcome to The React Quiz!</h1>
      <h3 className="text-3xl">
        {NumberQuestions} questions to test your React JS skills
      </h3>
      <button
        onClick={dispatch}
        className="border bg-white text-gray-700 px-6 rounded-xl py-2 mt-6 text-lg"
      >
        Let&apos;s Start
      </button>
    </div>
  );
};

export default StartScreen;
