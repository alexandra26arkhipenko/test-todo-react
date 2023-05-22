import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import Card from "./Card";

describe("Card", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <Card className={""} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
