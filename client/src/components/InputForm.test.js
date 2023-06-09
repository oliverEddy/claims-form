import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
  test("renders policy number input", () => {
    const { getByPlaceholderText } = render(<InputForm />);
    const policyNumberInput = getByPlaceholderText("00000000");
    expect(policyNumberInput).toBeInTheDocument();
  });

  test("renders customer ID number input", () => {
    const { getByPlaceholderText } = render(<InputForm />);
    const customerIdNumberInput = getByPlaceholderText(
      "Enter customer ID number"
    );
    expect(customerIdNumberInput).toBeInTheDocument();
  });

  test("renders condition input", () => {
    const { getByPlaceholderText } = render(<InputForm />);
    const conditionInput = getByPlaceholderText("eg. Fracture");
    expect(conditionInput).toBeInTheDocument();
  });

  test("renders date of first symptoms input", () => {
    const { container } = render(<InputForm />);
    const datePickerInput = container.querySelector(".date-picker");
    expect(datePickerInput).toBeInTheDocument();
  });

  test("renders symptom details textarea", () => {
    const { getByLabelText } = render(<InputForm />);
    const symptomDetailsTextarea = getByLabelText("Symptom details:");
    expect(symptomDetailsTextarea).toBeInTheDocument();
  });

  test("renders type of medical service input", () => {
    const { getByPlaceholderText } = render(<InputForm />);
    const serviceTypeInput = getByPlaceholderText("e.g. x-ray");
    expect(serviceTypeInput).toBeInTheDocument();
  });

  test("renders provider facility input", () => {
    const { getByPlaceholderText } = render(<InputForm />);
    const providerFacilityInput = getByPlaceholderText(
      "e.g. Pacific Radiology, Grey Lynn"
    );
    expect(providerFacilityInput).toBeInTheDocument();
  });

  test("renders alternative health insurance select", () => {
    const { container } = render(<InputForm />);
    const alternativeHealthInsuranceSelect = container.querySelector(
      'select[name="alternativeHealthInsurance"]'
    );
    expect(alternativeHealthInsuranceSelect).toBeInTheDocument();
  });
  test("renders consent statement select", () => {
    const { container } = render(<InputForm />);
    const consentStatementSelect = container.querySelector(
      'select[name="consentStatement"]'
    );
    expect(consentStatementSelect).toBeInTheDocument();
  });

  test("renders submit button", () => {
    const { getByText } = render(<InputForm />);
    const submitButton = getByText("Submit your claim");
    expect(submitButton).toBeInTheDocument();
  });
});
