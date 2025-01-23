import { useMemo, useState } from "react";
var slow=(num)=>{
    for(var delay =0; delay<10;delay++){};
    return num*2;
}

const UseMemo=()=>{
    var[num ,setNum]=useState(0);
    var[dark,setDark]=useState(false);

    var styling={
        backgroundColor: dark ? "black":"white",
        color : dark ? "white":"black"
    }
    var doubleLink=useMemo(()=>{
        return slow(num)
    },[num])
    return (
       <div style={styling}>
           <h3>This is Use Memo Hook Example</h3>
           <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}} />
           <button onClick={()=>{setDark(currTheme => !currTheme)}}>Theme change</button>
           <h4>the number is {doubleLink}</h4>
       </div>
    );
}
export default UseMemo;