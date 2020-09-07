export const initialTodos = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
    },
    {
      item: "Build a simple reducer and initial state",
      completed: true,
      id: 3892987588,
    },
    {
      item: "Set up state in your component",
      completed: true,
      id: 389298757,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    // case "ADD_TODO":
    //   return {
    //     ...state,
    //     todos: {
    //       ...state.todos,
    //       item: action.payload,
    //       completed: false,
    //       id: new Date(),
    //     },
    //   };
    default:
      return state;
  }
};
