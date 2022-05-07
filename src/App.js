import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ToDoApp from "./components/ToDoApp/ToDoApp";
import SignUpForm from "./components/SignUp/SignUpForm";
import LoginForm from "./components/Login/LoginForm";
import Header from "./components/Header/Header";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ToDoApp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
