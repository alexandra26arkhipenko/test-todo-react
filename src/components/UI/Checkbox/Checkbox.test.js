import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Checkbox />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
