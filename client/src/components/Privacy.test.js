import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Privacy from "./Privacy";

describe("Privacy Policy", () => {
  test("displays the privacy policy correctly", () => {
    render(<Privacy />);

    // Test that the privacy policy heading is displayed
    const headingElement = screen.getByText("Privacy Policy");
    expect(headingElement).toBeInTheDocument();

    // Test that the paragraphs of the privacy policy are displayed correctly
    const paragraphs = [
      "We collect personal information from you, including information about your: name, contact information, claim information.",
      "We collect your personal information in order to: process and assess claims.",
      "Providing some information is optional. If you choose not to enter access to personal data, we'll be unable to adequately assess claims. You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong.",
      "If you’d like to ask for a copy of your information, or to have it corrected, please contact us at admin@ensure.com, or 09 468 8976, or 151 Ponsonby Road, Auckland.",
    ];

    paragraphs.forEach((paragraph) => {
      const paragraphElement = screen.getByText(paragraph);
      expect(paragraphElement).toBeInTheDocument();
    });
  });
});
