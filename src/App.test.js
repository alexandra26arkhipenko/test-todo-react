import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

describe("App", () => {
  it("should renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
