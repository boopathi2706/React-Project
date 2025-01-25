import { useEffect, useState } from "react";


const useLocalStorage=(key,value)=>{
         var[text,setText]=useState(()=>{
            const jsonValue=localStorage.getItem(key);
         if(jsonValue!=null) return JSON.parse(jsonValue);
         return jsonValue;
         });
         useEffect(()=>{
            localStorage.setItem(key,JSON.stringify(text));
         },[key,value]);


         return [text,setText]
         

}
export default useLocalStorage;