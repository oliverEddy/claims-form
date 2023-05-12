import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputForm from "./InputForm";

describe("InputForm", () => {
  test("renders form elements correctly", () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <InputForm />
    );

    // Verify the existence of form elements
    const policyNumberInput = getByLabelText("Policy Number:");
    expect(policyNumberInput).toBeInTheDocument();

    const customerIdNumberInput = getByLabelText("Customer ID Number:");
    expect(customerIdNumberInput).toBeInTheDocument();

    const conditionInput = getByLabelText("Condition:");
    expect(conditionInput).toBeInTheDocument();

    const firstSymptomsDatePicker = getByPlaceholderText("select date");
    expect(firstSymptomsDatePicker).toBeInTheDocument();

    const symptomDetailsTextArea = getByLabelText("Symptom details:");
    expect(symptomDetailsTextArea).toBeInTheDocument();

    const serviceTypeInput = getByLabelText("Type of Medical Service:");
    expect(serviceTypeInput).toBeInTheDocument();

    const providerFacilityInput = getByLabelText("Provider Facility:");
    expect(providerFacilityInput).toBeInTheDocument();

    const alternativeHealthInsuranceSelect = getByLabelText(
      "Do you have a policy with another health provider that you can make this claim with?"
    );
    expect(alternativeHealthInsuranceSelect).toBeInTheDocument();

    const consentStatementSelect = getByLabelText("Consent Statement:");
    expect(consentStatementSelect).toBeInTheDocument();

    const submitButton = getByText("Submit your claim");
    expect(submitButton).toBeInTheDocument();
  });

  // You can write additional tests to simulate user interactions and check the behavior
  // of your form based on those interactions.
});
