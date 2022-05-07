import React, { useState, useEffect } from "react";

function Form({ todos, setTodos, inputText, setInputText }) {
  const [disableSubmit, setDisableSubmit] = useState(true);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // stops page from refreshing
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  useEffect(() => {
    if (inputText !== "") {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [inputText]);

  return (
    <form>
      <input
        ref={(input) => input && input.focus()}
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button
        onClick={submitTodoHandler}
        className="todo-button"
        type="submit"
        disabled={disableSubmit}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}

export default Form;
