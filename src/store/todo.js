import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [
    { id: uuid(), text: "kill yourself", isCompleted: false },
    { id: uuid(), text: "you really should to it", isCompleted: true },
    { id: uuid(), text: "find new job", isCompleted: true },
    { id: uuid(), text: "eat lunch", isCompleted: false },
    { id: uuid(), text: "get platinim in the witcher", isCompleted: false },
    { id: uuid(), text: "go to Paris", isCompleted: true },
  ],
  filter: "",
};

const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: uuid(),
        text: action.payload,
        isCompleted: false,
      };

      state.todos.unshift(newTodo);
    },
    compliteTodo(state, action) {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);

      if (index !== -1) {
        state.todos[index].isCompleted = !state.todos[index].isCompleted;
      }
    },
    deleteTodo(state, action) {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);

      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    deleteAllCompletedTodos(state, action) {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
    filterTodos(state, action) {
      state.filter = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
