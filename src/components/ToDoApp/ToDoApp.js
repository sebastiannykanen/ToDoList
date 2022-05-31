import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";

function ToDoApp(props) {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default ToDoApp;
