import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getItemFromLocalStorage } from "../repository/localStorageRepository";

const savedTodos = getItemFromLocalStorage("todos");
let todos = [];

if (savedTodos) {
  todos = JSON.parse(savedTodos);
}

const initialState = {
  todos: todos,
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
    deleteAllCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
    filterTodos(state, action) {
      state.filter = action.payload;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
