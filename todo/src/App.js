import React, { useReducer } from "react";

import Form from "./Components/Form";

import { initialTodos, todoReducer } from "./reducers/todoReducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <div className="App">
      <Form />
      {state.map((todo, index) => {
        return <h1 key={todo.id}>List Item: {todo.item}</h1>;
      })}
    </div>
  );
}

export default App;
