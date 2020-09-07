import React, { useReducer } from "react";
import { initialState } from "../reducers/todoReducer";
import { todoReducer } from "../reducers/todoReducer";

const Store = useReducer(todoReducer, initialState);

export default Store;
