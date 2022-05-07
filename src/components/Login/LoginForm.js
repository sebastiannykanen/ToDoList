import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login">
        <label>Username</label>
        <input className="login-input" type="text"></input>
        <label>Password</label>
        <input className="login-input" type="password"></input>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
