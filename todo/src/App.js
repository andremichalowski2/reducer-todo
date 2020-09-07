import React, { useReducer } from 'react';
import { initialState } from './reducers/reducer'
import { reducer } from './reducers/reducer'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state[0].item);
  return (
    <div className="App">
      {state.map((item, index) => {
        return <h1>List Item: {state[index].item}</h1>
      })}
    </div>
  );
}

export default App;
