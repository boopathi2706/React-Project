import { useEffect, useState } from "react";



const List =({func})=>{
    var [numbers,setNumbers]=useState([])
    useEffect(()=>{
           setNumbers(func());
    },[func])
    return(
        <div>
            <h3>this is list of follows according to this parsent in input box</h3>
            {numbers.map((number,index)=>{
                return <h4 key={index}>{number}</h4>
            })}
        </div>
    )
}
export default List;