import React from "react";

const TodoForm = ({ inputText, setInputText, todos, setTodos, inputFocus }) => {
  // OnChange Handler
  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  // OnSubmit Handler
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!inputText || /^\s*$/.test(inputText)) {
      return;
    }

    setTodos([
      ...todos,
      { text: inputText, complete: false, id: Math.random() * 10000 },
    ]);
    setInputText("");
  };

  return (
    <form className="todo__form">
      <input
        type="text"
        placeholder="Add a todo..."
        className="todo__input"
        value={inputText}
        onChange={onChangeHandler}
        ref={inputFocus}
      />
      <button type="button" className="todo__btn" onClick={onSubmitHandler}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
