import { createSlice } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const initialState = {
  todos: [
    { id: 123, text: "kill yourself" },
    { id: 456, text: "you really should to it" },
  ],
};

const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: uuid(),
        text: action.payload,
      };

      state.todos.push(newTodo);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
