import { useState } from "react";


const Signup=()=>{
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSignup=()=>{
      
            console.log("Processing....");
        
    }
    return(
       <div>
          <h2>Welcome signup</h2>
        <form action="http://localhost:3001/signup" method="POST">
     
       First Name:
       <input type="text" name="firstname" onChange={(e)=>{setFirstname(e.target.value)}} required/>
       Last Name:
       <input type="text" name="lastname" onChange={(e)=>{setLastname(e.target.value)}} required/>
       Email:
       <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
       Password:
       <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
       <button type="submit">Sign Up</button>
       </form>
       </div>

    );
};
export default Signup;
