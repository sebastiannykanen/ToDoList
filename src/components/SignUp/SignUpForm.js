import React from "react";
import "./SignUpForm.css";

function SignUpForm() {
  return (
    <div className="sign-up-container">
      <div className="sign-up">
        <label>Username</label>
        <input className="sign-up-input" type="text"></input>
        <label>Password</label>
        <input className="sign-up-input" type="password"></input>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </div>
  );
}

export default SignUpForm;
