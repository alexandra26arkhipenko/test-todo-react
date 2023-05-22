import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import Header from "./Header";

describe("Header", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
