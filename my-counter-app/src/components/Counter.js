import React, { useReducer } from "react";
import "../App.css";

//Define initial state
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "reduction":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  // Define useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counterContainer">
      <h1 className="counterHeading">Counter</h1>
      <h2 className="count">{state}</h2>
      <button className="counterbtn" onClick={() => dispatch("increase")}>
        Increase
      </button>
      <button className="counterbtn" onClick={() => dispatch("reduction")}>
        Reduction
      </button>
      <button className="counterbtn" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
