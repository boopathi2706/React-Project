import { useState } from "react";

const UseState=()=>{
    const [number ,setNumber]=useState(0);
    return (
        <div>
            <h1>Counter</h1>
            <h3>{number}</h3>
            <button onClick={()=>setNumber(number+1)}>Increment</button>
            <button onClick={()=>setNumber(number-1)}>Decrement</button>
            <button onClick={()=>setNumber(0)}>Reset</button>
        </div>
    )
}
export default UseState;