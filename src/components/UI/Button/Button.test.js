import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import Button from "./Button";

const props = {
  type: "button",
  onClick: jest.fn(),
  className: "",
};

describe("Button", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Button {...props} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
