import React from 'react';

const Todo = ({ todo }) => {
  return(
    <div>
      <h3
        id={todo.id}
        name={todo.id}
        // onChange=""
        >{todo.item}</h3>
    </div>
  )
}

export default Todo;