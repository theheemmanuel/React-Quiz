/* eslint-disable no-case-declarations */
export default function Reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "Questions":
      return { ...state, questions: action.payload, status: "ready" };
    case "failed":
      return { ...state, status: "failed" };
    case "start":
      return {
        ...state,
        status: "active",
        timeRemaining: state.questions.length * 10,
      };
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "newAnswer":
      const currentQuest = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuest.correctOption
            ? state.points + currentQuest.points
            : state.points,
      };
    case "next":
      return { ...state, index: state.index + 1, answer: null };
    case "restart":
      return {
        ...state,
        points: 0,
        index: 0,
        status: "ready",
        answer: null,
        timeRemaining: 10,
      };
    // case "tick":
    //   return {
    //     ...state,
    //     timeRemaining: state.timeRemaining - 1,
    //     status: state.timeRemaining === 0 ? "finished" : state.status,
    //   };
    case "tick":
      if (state.timeRemaining === 0) {
        return {
          ...state,
          timeRemaining: 0,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      } else {
        return {
          ...state,
          timeRemaining: state.timeRemaining - 1,
        };
      }
  }
  return action.payload;
}
