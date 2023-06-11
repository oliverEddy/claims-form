import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./app";

test("renders logo correctly", () => {
  const { getByAltText } = render(<App />);
  const logoElement = getByAltText("ensure logo");
  expect(logoElement).toBeInTheDocument();
});
