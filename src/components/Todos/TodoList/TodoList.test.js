import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import TodoList from "./TodoList";

describe("TodoInput", () => {
  it("should render correctly", () => {
    const { container } = render(
        <Provider store={store}>
          <TodoList />
        </Provider>
      );
    expect(container).toMatchSnapshot();
  });
});
