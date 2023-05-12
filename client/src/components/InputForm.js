import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./InputForm.css";
// import {useAuth0} from "@auth0/auth0-react";

const InputForm = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [customerIdNumber, setCustomerIdNumber] = useState("");
  const [condition, setCondition] = useState("");
  const [firstSymptoms, setFirstSymptoms] = useState("");
  const [symptomDetails, setSymptomDetails] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [providerFacility, setProviderFacility] = useState("");
  const [alternativeHealthInsurance, setAlternativeHealthInsurance] =
    useState("");
  const [consentStatement, setConsentStatement] = useState("");
  // const {getAccessTokenSilently} = useAuth0();

  const description = {
    policyNumber: policyNumber,
    customerIdNumber: customerIdNumber,
    condition: condition,
    firstSymptoms: firstSymptoms,
    symptomDetails: symptomDetails,
    serviceType: serviceType,
    providerFacility: providerFacility,
    alternativeHealthInsurance: alternativeHealthInsurance,
    consentStatement: consentStatement,
  };

  const onSubmit = async (e) => {
    // const accessToken = await getAccessTokenSilently();
    e.preventDefault();
    try {
      await fetch(
        "http://localhost:5001/api/claims",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${accessToken}`
          },

          body: JSON.stringify(description),
        },
        []
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="heading">Claims Form</h1>
      <div className="form-container">
        <form>
          {/* create a form that has label and input fields for policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement, calimsStatus*/}

          <div className="form-group">
            <label htmlFor="policyNumber">Policy Number:</label>
            <input
              type="text"
              className="form-control"
              id="policyNumber"
              placeholder="00000000"
              value={policyNumber}
              onChange={(e) => setPolicyNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="customerIdNumber">Customer ID Number:</label>
            <input
              type="text"
              className="form-control"
              id="customerIdNumber"
              placeholder="Enter customer ID number"
              onChange={(e) => setCustomerIdNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="condition">Condition:</label>
            <input
              type="text"
              className="form-control"
              id="condition"
              placeholder="eg. Fracture"
              onChange={(e) => setCondition(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="form-name">
              Date of First Symptoms:
            </label>
            <DatePicker
              className="form-input date-picker"
              maxDate={new Date()}
              dateFormat="dd/MM/yyyy"
              selected={firstSymptoms}
              onChange={(date) => setFirstSymptoms(date)}
              placeholderText="select date"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstSymptoms">Symptom details:</label>
            <textarea
              type="text"
              className="form-control"
              id="firstSymptoms"
              placeholder="e.g. unable to bear weight"
              onChange={(e) => setSymptomDetails(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="serviceType">Type of Medical Service:</label>
            <input
              type="text"
              className="form-control"
              id="serviceType"
              placeholder="e.g. x-ray"
              onChange={(e) => setServiceType(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="providerFacility">Provider Facility:</label>
            <input
              type="text"
              className="form-control"
              id="providerFacility"
              placeholder="e.g. Pacific Radiology, Grey Lynn"
              onChange={(e) => setProviderFacility(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="alternativeHealthInsurance">
              Do you have a policy with another health provider that you can
              make this claim with?
            </label>
            <select
              className="form-input"
              name="alternativeHealthInsurance"
              required
              onChange={(event) => {
                setAlternativeHealthInsurance(event.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="consentStatement">
              Consent Statement:{" "}
              <div className="consent-statement">
                "As part of an insurance claim with enSURE, I consent and give
                authority to enSURE and any of its related entities and agents
                to collect, use and disclose, any medical, financial or other
                personal information about the life assured for the purposes of
                assessing and managing the insurance claim. I declare that all
                medical information pertaining to me and relevant to my
                insurance claim has been provided and disclosed to enSURE, and
                understand that making any false or fraudulent claim could
                result in cancellation of my policy and/or oblige me to repay
                any claims."
              </div>
            </label>
            <select
              className="form-input"
              name="consentStatement"
              required
              onChange={(event) => {
                setConsentStatement(event.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>
        </form>
        <button className="btn btn-success" onClick={onSubmit}>
          Submit your claim
        </button>
      </div>
    </>
  );
};

export default InputForm;
