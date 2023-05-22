import React from "react";
import { Provider } from "react-redux";
import TodoFilter from "./TodoFilter";
import { TODO_FOOTER_FILTER_ALL } from "../../../../constants/constants";
import { render, fireEvent, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { todoActions } from "../../../../store/todo";

const props = {
  onFilter: jest.fn(),
};
const mockStore = configureMockStore();
const store = mockStore({});

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
