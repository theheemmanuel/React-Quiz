/* eslint-disable react/prop-types */

const Options = ({ question, answer, dispatch }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">{question.question}</h1>
      <div className="">
        {question.options.map((each, index) => (
          <button
            key={each}
            disabled={answer !== null}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={`font-semibold text-lg block p-4 rounded-2xl w-1/2 text-left bg-gray-600 my-3 border-2 border-gray-600 duration-300 ${
              answer === index ? "ml-4" : ""
            } ${
              answer !== null
                ? index === question.correctOption
                  ? "bg-green-500"
                  : "bg-red-500"
                : "hover:ml-4 hover:bg-transparent"
            }`}
          >
            {each}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
