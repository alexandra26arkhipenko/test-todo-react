import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import TodoInput from "./TodoInput";

describe("TodoInput", () => {
  it("should render correctly", () => {
    const { container } = render(
        <Provider store={store}>
          <TodoInput />
        </Provider>
      );
    expect(container).toMatchSnapshot();
  });
});
