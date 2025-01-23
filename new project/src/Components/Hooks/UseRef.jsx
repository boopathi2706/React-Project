import {useEffect, useRef, useState} from "react";

const UseRef=()=>{
    var [text,setText]=useState("");
    var previousRender =useRef();
    useEffect(()=>{
        previousRender.current=text;
    },[text])
       return (
         <div>
            <h3>This is UseRef Example</h3>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
            <h4>the text is : {text}</h4>
            <h3>the previous render is : {previousRender.current}</h3>
         </div>
       )
}
export default UseRef;