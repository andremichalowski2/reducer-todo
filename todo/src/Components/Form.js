import React from 'react';


function Form() {
  return (
    <form 
      style={{"margin" : "20px"}}>
      {/* onSubmit="" */}
      <input
        type="text"
        name="newTask">
        {/* value="" */}
        {/* onChange="" */}
        </input>
        <button>Add!</button>
    </form>
  )
}
export default Form;