import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, text }) => {
  return (
    <div className="todo__list">
      {todos.map((todo) => (
        <Todo
          text={todo.text}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
