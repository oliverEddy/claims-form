import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Claim.css"
import { formatDate } from "../utils/formatDate";


function Claim() {
  const { id } = useParams();
  const [claim, setClaim] = useState({});
  const [claimant, setClaimant] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);




  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/claims/${id}`);
      const response = await fetch(`http://localhost:5001/api/claims/${id}`);

      // const claimantResponse = await fetch(`http://localhost:5001/api/claimants/${id}`);

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }
      

      const data = await response.json();

      console.log(data)
      setClaim(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isNotFound) {
    return (
      <>
        <p>"Sorry we can not find that claim!"</p>
        <Link to={`/`} className="button">
          Return to the homepage
        </Link>
      </>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="claim-item">
        

        <h2>{claim.claimid}</h2>
        
        <h2>{claim.policynumber}</h2>
        
        <h2>{claim.customeridnumber}</h2>

        <h2>{claim.condition}</h2>
        
        <h2>{formatDate(claim.firstsymptoms)}</h2>

        <h2>{claim.symptomdetails}</h2>

        <h2>{claim.servicetype}</h2>

        <h2>{claim.providerfacility}</h2>

        <h2>{claim.alternativehealthinsurance}</h2>

        <h2>{claim.consentstatement}</h2>

        <h2>{claim.claimstatus}</h2>
      
      </div>
    </>
  );
};


export default Claim;