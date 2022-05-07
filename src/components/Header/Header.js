import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <Link className="header-home" to="/">
        Home
      </Link>
      <Link className="header-login" to="/login">
        Login
      </Link>
      <Link className="header-sign-up" to="/signup">
        Sign up
      </Link>
    </div>
  );
}

export default Header;
