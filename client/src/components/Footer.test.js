import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import "@testing-library/jest-dom/extend-expect"; // Import the extend-expect function

describe("Footer", () => {
  test("displays the correct content", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    // Check if the copyright text is displayed correctly
    const copyrightText = screen.getByText(/copyright/i);
    expect(copyrightText).toBeInTheDocument(); // Use toBeInTheDocument matcher

    // Check if the address is displayed correctly
    const addressText = screen.getByText(/151 Ponsonby Road/i);
    expect(addressText).toBeInTheDocument(); // Use toBeInTheDocument matcher

    // Check if the privacy policy link is displayed correctly
    const privacyPolicyLink = screen.getByText(/privacy policy/i);
    expect(privacyPolicyLink).toBeInTheDocument(); // Use toBeInTheDocument matcher
    expect(privacyPolicyLink).toHaveClass("footer-privacy");
    expect(privacyPolicyLink).toHaveAttribute("href", "/privacy-policy");
  });
});
