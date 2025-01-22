import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";

function Login_day8(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form >
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
          <Link to={'/navbar'}>
              Login
          </Link>
            
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login_day8;