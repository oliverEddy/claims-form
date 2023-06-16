import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Homepage from "./Homepage";

describe("Homepage", () => {
  it("renders the home page component", () => {
    render(<Homepage />);

    expect(
      screen.getByText(/Keeping the unexpected, uncomplicated/i)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("pic of healthy active family")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Leading the industry in Trust, Wellbeing, Safety, Compassion/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Our Advisors are professionals with specialist knowledge to assist you/i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });
});
