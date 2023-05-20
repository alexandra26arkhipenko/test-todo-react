import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import TodoFooter from "./TodoFooter";

const props = {
    onFilter: jest.fn(),
    activeTodosCount: 1
}

describe("TodoFooter", () => {
  it("should render correctly", () => {
    const { container } = render(
        <Provider store={store}>
          <TodoFooter {...props}/>
        </Provider>
      );
    expect(container).toMatchSnapshot();
  });
});
