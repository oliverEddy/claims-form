import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import App from "./app";

test("renders logo correctly", () => {
  const { getByAltText } = render(
    <Router>
      <App />
    </Router>
  );
  const logoElement = getByAltText("ensure logo");
  expect(logoElement).toBeInTheDocument();
});
