import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Claims.css";
import { formatDate } from "../utils/formatDate";
import {useAuth0} from "@auth0/auth0-react";

function Claim() {
  const [claims, setClaims] = useState({});
  const [claimant, setClaimant] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);


  const {getAccessTokenSilently} = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${process.env.REACT_APP_API_URL}/claims`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
        },
        )
      
      
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
  }, [getAccessTokenSilently]);

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
