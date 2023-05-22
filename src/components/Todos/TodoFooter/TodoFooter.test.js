import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import TodoFooter from "./TodoFooter";
import { todoActions } from "../../../store/todo";
import configureMockStore from "redux-mock-store";

const props = {
  onFilter: jest.fn(),
  activeTodosCount: 1,
};
const mockStore = configureMockStore();
const store = mockStore({});

describe("TodoFooter", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <TodoFooter {...props} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should delete all completed when delete all btn is clicked", () => {
    render(
      <Provider store={store}>
        <TodoFooter {...props} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Clear Completed"));

    expect(store.getActions()).toContainEqual(
      todoActions.deleteAllCompletedTodos()
    );
  });
});
