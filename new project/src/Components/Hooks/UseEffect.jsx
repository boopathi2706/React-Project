import { useEffect,useState } from "react";

const  UseEffect=()=>{
    var [text,setText]=useState("");
    return(
        <div>
             <h1>Welcome t useEffect Example</h1>
             <input type="number" onChange={(e)=>{setText(e.target.value)}} />
             <h4>the value is : {text}</h4>
        </div>
    );
};
export default UseEffect;