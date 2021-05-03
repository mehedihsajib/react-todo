import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  // Delete Handler
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // Complete Handler
  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            complete: !el.complete,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <ul className="todo__item">
        <li className={` ${todo.complete ? "done" : "null"}`}>{text}</li>
        <button type="button" className="dlt__btn" onClick={deleteHandler}>
          x
        </button>
        <button type="button" className="done__btn" onClick={completeHandler}>
          Done
        </button>
      </ul>
    </div>
  );
};

export default Todo;
