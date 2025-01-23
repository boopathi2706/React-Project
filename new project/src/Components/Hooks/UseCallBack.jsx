import { useState } from "react";
import List from "./List";

const UseCallBack = () => {
  var [num, setNum] = useState(0);
  var [dark, setDark] = useState(false);
  var styling = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  var getItems = () => {
    return [num + 1, num + 2, num + 3];
  };
  return (
    <div style={styling}>
      <h3>This is UseCallBack hook Example</h3>
      <button
        onClick={() => {
          setDark((curr) => !curr);
        }}
      >
        Theme
      </button>
      <br />
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <List func={getItems} />
    </div>
  );
};
export default UseCallBack;
