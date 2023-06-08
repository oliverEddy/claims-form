import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputForm from "../components/InputForm";

describe("InputForm", () => {
  test("submits form correctly", async () => {
    // Render the component
    const { getByLabelText, getByText } = render(<InputForm />);

    // Fill in the form inputs
    const policyNumberInput = getByLabelText("Policy Number:");
    const customerIdNumberInput = getByLabelText("Customer ID Number:");
    const conditionInput = getByLabelText("Condition:");
    // ... fill in the remaining inputs

    // Fill in the form inputs with sample values
    fireEvent.change(policyNumberInput, { target: { value: "00000000" } });
    fireEvent.change(customerIdNumberInput, { target: { value: "12345678" } });
    fireEvent.change(conditionInput, { target: { value: "Fracture" } });
    // ... set the values of the remaining inputs

    // Submit the form
    const submitButton = getByText("Submit your claim");
    fireEvent.click(submitButton);

    // Wait for the submission process (e.g., API calls, redirects)
    // ... use waitFor if necessary

    // Assertions for successful submission
    // ... assert the expected behavior after successful submission
  });

  test("displays error message on invalid submission", async () => {
    // Render the component
    const { getByText } = render(<InputForm />);

    // Submit the form without filling in the required inputs
    const submitButton = getByText("Submit your claim");
    fireEvent.click(submitButton);

    // Wait for the submission process (e.g., error messages)
    // ... use waitFor if necessary

    // Assertions for error message display
    // ... assert the expected error message behavior
  });
  test("renders the title", () => {
    const { getByText } = render(<InputForm />);
    const titleElement = getByText("Claims Form");
    expect(titleElement).toBeInTheDocument();
  });
});
