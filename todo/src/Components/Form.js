import React, { useState, useReducer } from "react";

import { initialTodos, todoReducer } from "../reducers/todoReducer";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <form style={{ margin: "20px" }}>
      <input
        type="text"
        name="newTask"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={() => dispatch({ type: "ADD_TODO", payload: inputValue })}
      >
        Add!
      </button>
    </form>
  );
};

export default Form;
