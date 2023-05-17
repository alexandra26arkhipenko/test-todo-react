import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [
    { id: uuid(), text: "kill yourself", isComplited: false },
    { id: uuid(), text: "you really should to it", isComplited: true },
    { id: uuid(), text: "find new job", isComplited: true },
    { id: uuid(), text: "eat lunch", isComplited: false },
    { id: uuid(), text: "get platinim in the witcher", isComplited: false },
    { id: uuid(), text: "go to Paris", isComplited: true },
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
