import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

it("renders the app", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
