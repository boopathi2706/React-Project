import useLocalStorage from "./SampleCustomHooks";

const UseLocalStorage=()=>{
     var [text,setText]=useLocalStorage("customerID","");
     var [password,setPassword]=useLocalStorage("password","");
       return(
        <div>
               <h2>Utilizing custom Hook Created</h2>
               <label htmlFor="user">Username</label><br />
               <input type="text"  value={text} onChange={(e)=>{setText(e.target.value)}}/> <br />
               <br />
               <label htmlFor="password">Password</label><br />
               <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br /><br />
               <h3>the text is {text}</h3>
        </div>
            
       );
}
export default UseLocalStorage;