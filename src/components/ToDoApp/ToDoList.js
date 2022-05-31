import React from "react";
import Todo from "./Todo";
import { getDocs } from "firebase/firestore";
import { colRef } from "../../firebase";

function ToDoList({ todos, setTodos }) {
  //get collection data
  getDocs(colRef).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      todos.push({
        ...doc.data(),
        id: doc.id,
      });
      console.log(todos);
    });
  });

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            text={todo.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
