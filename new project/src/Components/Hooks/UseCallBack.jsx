import { useState } from "react";



const UseCallBack=()=>{
    var [num,setNum]=useState(0);
     return(
        <div>
            <h3>This is UseCallBack hook Example</h3>
            <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}} />
            <h4>The number is : {num}</h4>
        </div>
     );
}
export default UseCallBack;