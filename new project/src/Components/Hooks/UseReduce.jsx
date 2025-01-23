import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducer() {
  var [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>Count - {count}</h4>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
}
export default UseReducer;
