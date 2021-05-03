import React, { useState, useEffect, useRef } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // Input Focus
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  });

  // Get local storage
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveToLocalTodos();
  }, [todos]);

  // Save to local
  const saveToLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoFromLocal);
    }
  };

  return (
    <div className="todo__app">
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputFocus={inputFocus}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoApp;
