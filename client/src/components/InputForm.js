import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./InputForm.css";
import { useAuth0 } from "@auth0/auth0-react";

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
  const { getAccessTokenSilently } = useAuth0();
  const [captchaValue, setCaptchaValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorSubmitMessage, setErrorSubmitMessage] = "";

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
    captchaValue: captchaValue,
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  const onSubmit = async (e) => {
    const accessToken = await getAccessTokenSilently();
    e.preventDefault();
    try {
      if (captchaValue) {
        // const body = { policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement}
        const response = await fetch("http://localhost:5001/api/claims", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          // Authorization: `Bearer ${accessToken}`
          body: JSON.stringify(description),
        });
        const status = await response.status;
        if (status === 201) {
          //reloads the page after submission
          window.location = "/";
        } else {
          setErrorSubmitMessage(
            "An error has happened while adding a new item.  Please try again"
          );
        }
      } else {
        setErrorMessage("Missing I am a robot verification");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="heading">Claims Form</h1>
      <div className="form-container">
        <form className="grid-container">
          {errorSubmitMessage && (
            <div className="error">
              <p>{errorSubmitMessage}</p>
            </div>
          )}
          {/* create a form that has label and input fields for policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement, calimsStatus*/}

          <div className="grid-item">
            <label className="label" htmlFor="policyNumber">
              Policy Number:
            </label>
            <input
              type="text"
              id="policyNumber"
              placeholder="00000000"
              value={policyNumber}
              onChange={(e) => setPolicyNumber(e.target.value)}
              required
            />
          </div>

          <div className="grid-item">
            <label className="label" htmlFor="customerIdNumber">
              Customer ID Number:
            </label>
            <input
              type="text"
              id="customerIdNumber"
              placeholder="Enter customer ID number"
              onChange={(e) => setCustomerIdNumber(e.target.value)}
              required
            />
          </div>

          <div className="grid-item">
            <label className="label" htmlFor="condition">
              Condition:
            </label>
            <input
              type="text"
              id="condition"
              placeholder="eg. Fracture"
              onChange={(e) => setCondition(e.target.value)}
              required
            />
          </div>

          <div className="grid-item">
            <label className="label" htmlFor="description">
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

          <div className="grid-item">
            <label className="label" htmlFor="firstSymptoms">
              Symptom details:
            </label>
            <textarea
              className="textarea"
              type="text"
              id="firstSymptoms"
              placeholder="e.g. unable to bear weight"
              onChange={(e) => setSymptomDetails(e.target.value)}
              required
            />
          </div>

          <div className="grid-item">
            <label className="label" htmlFor="serviceType">
              Type of Medical Service:
            </label>
            <input
              type="text"
              id="serviceType"
              placeholder="e.g. x-ray"
              onChange={(e) => setServiceType(e.target.value)}
              required
            />
          </div>

          <div className="grid-item">
            <label className="label" htmlFor="providerFacility">
              Provider Facility:
            </label>
            <input
              type="text"
              id="providerFacility"
              placeholder="e.g. Pacific Radiology, Grey Lynn"
              onChange={(e) => setProviderFacility(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              className="label-statement"
              htmlFor="alternativeHealthInsurance"
            >
              Do you have a policy with another health provider that you can
              make this claim with?
            </label>
            <select
              className="select-statement"
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

          <div>
            <label className="label-statement" htmlFor="consentStatement">
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
              className="select-statement"
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

          {errorMessage && (
            <div className="error">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="recaptcha-div">
            <ReCAPTCHA
              // for some reason the below syntax will not render the captcha - sitekey has no value - why????
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              // sitekey="6Lf-6ZAmAAAAAIFH99ANlm4hAFlXplLEXMWttOsI"
              onChange={onChange}
              className="g-recaptcha"
            />
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
