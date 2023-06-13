import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Claims.css";
import { formatDate } from "../utils/formatDate";

function Claim() {
  const { id } = useParams();
  const [claims, setClaims] = useState({});
  const [claimant, setClaimant] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/claims/${id}`);
      const response = await fetch(`http://localhost:5001/api/claims`);

      // const claimantResponse = await fetch(`http://localhost:5001/api/claimants/${id}`);

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }

      const data = await response.json();

      console.log(data);
      setClaims(data);
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

  console.log(claims);
  return (
    <>
      <div className="">
        <div className="claim-item">
          <ul className="grid">
            {claims.map((claim) => {
              return (
                <li key={claim.id} className="claim">
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

                  <Link to={`/claims/${claim.claimid}`} className="button">
                    View Claim
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Claim;
