import { createSlice } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const initialState = {
  todos: [
    { id: 123, text: "kill yourself" },
    { id: 456, text: "you really should to it" },
    { id: 789, text: "find new job" },
    { id: 101112, text: "eat lunch" },
    { id: 131415, text: "get platinim in the witcher" },
    { id: 161718, text: "go to Paris" },
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
