import React from "react";
import { Provider } from "react-redux";
import TodoInput from "./TodoInput";
import { render, fireEvent, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { todoActions } from "../../../store/todo";
import { TODO_INPUT_PLACEHOLDER } from "../../../constants/constants";

const mockStore = configureMockStore();
const store = mockStore({});

describe("TodoInput", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should dispatch addTodo action when submitting todo", () => {
    render(
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText(TODO_INPUT_PLACEHOLDER);
    const formElement = screen.getByRole("form");
    const enteredTodo = "text";

    fireEvent.change(inputElement, { target: { value: enteredTodo } });
    fireEvent.submit(formElement);

    expect(store.getActions()).toContainEqual(todoActions.addTodo(enteredTodo));
  });
});
