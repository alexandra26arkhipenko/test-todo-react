import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getItemFromLocalStorage } from "../repository/localStorageRepository";
import { TODO_FOOTER_FILTER_ALL } from "../constants/constants";

const savedTodos = getItemFromLocalStorage("todos");
let todos = [];

if (savedTodos) {
  todos = JSON.parse(savedTodos);
}

const initialState = {
  todos: todos,
  filter: TODO_FOOTER_FILTER_ALL,
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
    reorderTodos(state, action) {
      let { dragIndex, dropIndex, filteredTodos } = action.payload;

      if (state.filterValue !== TODO_FOOTER_FILTER_ALL) {
        dragIndex = state.todos.findIndex(
          (property) => property.id === filteredTodos[dragIndex].id
        );
        dropIndex = state.todos.findIndex(
          (property) => property.id === filteredTodos[dropIndex].id
        );
      }

      const updatedTodos = [...state.todos];
      const [reorderedItem] = updatedTodos.splice(dragIndex, 1);
      updatedTodos.splice(dropIndex, 0, reorderedItem);
      state.todos = updatedTodos;
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice.reducer;
