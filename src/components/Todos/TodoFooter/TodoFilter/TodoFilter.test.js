import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../store/store";
import TodoFilter from "./TodoFilter";

const props = {
  onFilter: jest.fn(),
};

describe("TodoFilter", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <TodoFilter {...props} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
