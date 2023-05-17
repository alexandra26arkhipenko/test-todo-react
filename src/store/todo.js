import { createSlice } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const initialState = {
  todos: [
    { id: 123, text: "kill yourself", isComplited: false },
    { id: 456, text: "you really should to it", isComplited: true },
    { id: 789, text: "find new job", isComplited: true },
    { id: 101112, text: "eat lunch", isComplited: false },
    { id: 131415, text: "get platinim in the witcher", isComplited: false },
    { id: 161718, text: "go to Paris", isComplited: true },
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
        isComplited: false,
      };

      state.todos.push(newTodo);
    },
    compliteTodo(state, action) {
      const index = state.todos.findIndex((x) => x.id === action.payload);

      if (index !== -1) {
        state.todos[index].isComplited = !state.todos[index].isComplited;
      }
    },
    deleteTodo(state, action) {
      const index = state.todos.findIndex((x) => x.id === action.payload);

      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
