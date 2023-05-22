import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../../../store/store";

describe("Footer", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
