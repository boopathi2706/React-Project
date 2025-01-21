import { useState } from "react"



const Event_handling_day8=()=>{
   var [Text,setText]=useState("Boopathi");
   return(
       <div>
       <h2>Welcome to TextArea</h2>
       {/* <textarea id="content" value={Text} onChange={()=>{setText(document.getElementById("content").value)}} ></textarea> */}
        <textarea id="content" value={Text} onChange={(event)=>{setText(event.target.value)}} ></textarea>
       <p>Text is {Text}</p>
       </div>
   );
};
export default Event_handling_day8;