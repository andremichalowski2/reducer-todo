import React, { useReducer } from 'react';

import Todo from './Todo';

import {initialTodos, todoReducer} from './../reducers/todoReducer';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return(
    <div>
      <h1>Reducer Todo List</h1>
      {state.map((todo) => {
        return (
          <Todo todo={todo} key={todo.id} />
        );
      })}
    </div>
  )
}
export default TodoList;