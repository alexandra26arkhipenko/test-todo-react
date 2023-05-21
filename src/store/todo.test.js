import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { todoActions } from "./todo";
import { TODO_FILTER_ACTIVE_BTN } from "../constants/constants";

const todo = { id: "1", text: "text", isCompleted: false };

describe("todosSlice", () => {
  it("should add a new todo", () => {
    const store = configureStore({
      reducer: todoReducer,
      preloadedState: {
        todos: [],
        filter: "",
      },
    });

    store.dispatch(todoActions.addTodo("text"));

    const todos = store.getState().todos;

    expect(todos).toHaveLength(1);
    expect(todos[0].text).toEqual("text");
  });

  it("should make todo complited", () => {
    const store = configureStore({
      reducer: todoReducer,
      preloadedState: {
        todos: [{ id: "1", text: "text", isCompleted: false }],
        filter: "",
      },
    });

    store.dispatch(todoActions.compliteTodo(todo.id));

    const todos = store.getState().todos;

    expect(todos[0].isCompleted).toBe(true);
  });

  it("should delete a todo", () => {
    const store = configureStore({
      reducer: todoReducer,
      preloadedState: {
        todos: [{ id: "1", text: "text", isCompleted: false }],
        filter: "",
      },
    });

    store.dispatch(todoActions.deleteTodo(todo.id));

    const todos = store.getState().todos;

    expect(todos).toHaveLength(0);
  });

  it("should set the filter", () => {
    const store = configureStore({
      reducer: todoReducer,
      preloadedState: {
        todos: [{ id: "1", text: "text", isCompleted: false }],
        filter: "",
      },
    });

    store.dispatch(todoActions.filterTodos(TODO_FILTER_ACTIVE_BTN));

    const filter = store.getState().filter;
    expect(filter).toEqual(TODO_FILTER_ACTIVE_BTN);
  });

  it("should delete all completed todos", () => {
    const store = configureStore({
      reducer: todoReducer,
      preloadedState: {
        todos: [{ id: "1", text: "text", isCompleted: true }],
        filter: "",
      },
    });

    store.dispatch(todoActions.deleteAllCompletedTodos());

    const todos = store.getState().todos;

    expect(todos).toHaveLength(0);
  });
});
