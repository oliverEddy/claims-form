import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const InputForm = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [customerIdNumber, setCustomerIdNumber] = useState("");
  const [condition, setCondition] = useState("");
  const [firstSymptoms, setFirstSymptoms] = useState("");
  const [symptomDetails, setSymptomDetails] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [providerFacility, setProviderFacility] = useState("");
  const [alternativeHealthInsurance, setAlternativeHealthInsurance] = useState("");
  const [consentStatement, setConsentStatement] = useState("");
  


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
}

  const onSubmit = async () => {
    try {
      const body = { description };

      await fetch(`${process.env.REACT_APP_API_URL}/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Form</h1>
        <div className="d-flex mt-5">
<form>
{/* create a form that has label and input fields for policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement, calimsStatus*/}

  <div className="form-group">
    <label for="policyNumber">Policy Number</label>
    <input type="text" className="form-control" id="policyNumber" placeholder="Enter policy number" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} />
  </div>

  <div className="form-group">
    <label for="customerIdNumber">Customer ID Number</label>
    <input type="text" className="form-control" id="customerIdNumber" placeholder="Enter customer ID number" onChange={(e) => setCustomerIdNumber(e.target.value)} />
  </div>

  <div className="form-group">
    <label for="condition">Condition</label>
    <input type="text" className="form-control" id="condition" placeholder="Enter condition" onChange={(e) => setCondition(e.target.value)}/>
  </div>


  <div>
          <label htmlFor="description" className="form-name">First Symptoms:</label>
          <DatePicker
          className="form-input date-picker"
          showTimeSelect
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setFirstSymptoms(date)} 
          placeholderText="Select date you first noticed any symptoms"
          />
        </div>


        <div className="form-group">
          <label for="firstSymptoms">First Symptoms</label>
          <input type="text" className="form-control" id="firstSymptoms" placeholder="Enter first symptoms" onChange={(e) => setSymptomDetails(e.target.value)}/>
        </div>

  <div className="form-group">
    <label for="serviceType">Service Type</label>
    <input type="text" className="form-control" id="serviceType" placeholder="Enter service type" onChange={(e) => setServiceType(e.target.value)}/>
  </div>

  <div className="form-group">
    <label for="providerFacility">Provider Facility</label>
    <input type="text" className="form-control" id="providerFacility" placeholder="Enter provider facility" onChange={(e) => setProviderFacility(e.target.value)}/>
  </div>

  <div className="form-group">
    <label for="alternativeHealthInsurance">Alternative Health Insurance</label>
    <select className="form-input" name="alternativeHealthInsurance" required
          onChange={(event) => {
            setAlternativeHealthInsurance(event.target.value);
          }}>
            <option value="">Select</option>
            <option value="True">Yes</option>
            <option value="False">No</option>
          </select>
  </div>

  <div className="form-group">
    <label for="consentStatement">Consent Statement</label>
    <select className="form-input" name="consentStatement" required
          onChange={(event) => {
            setConsentStatement(event.target.value);
          }}>
            <option value="">Select</option>
            <option value="True">Yes</option>
            <option value="False">No</option>
          </select>
  </div>





</form>

        


</div>
      <div>
        <button className="btn btn-success" onClick={onSubmit}>
          Submit your claim
        </button>
      </div>

    </Fragment>
  );
};

export default InputForm;
