import React from "react";
import { Provider } from "react-redux";
import TodoFilter from "./TodoFilter";
import { TODO_FOOTER_FILTER_ALL } from "../../../../constants/constants";
import { render, fireEvent, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";

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

  it("calls clickHandler handler when button is clicked", () => {
    // Arrange
    const clickHandler = jest.fn();
    render(<TodoFilter onFilter={clickHandler} />);

    // Act
    const allButton = screen.getByText(TODO_FOOTER_FILTER_ALL);
    fireEvent.click(allButton);

    // Assert
    expect(clickHandler).toHaveBeenCalledWith(TODO_FOOTER_FILTER_ALL);
  });
});
