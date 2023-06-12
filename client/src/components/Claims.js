import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function Claims() {
  const { id } = useParams();
  const [claim, setClaim] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);




  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/claims/${id}`);
      const response = await fetch(`http://localhost:5001/claims/${id}`);

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }
      

      const data = await response.json();
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
      <div className="restaurant-item">
        
        <h1>This is the claim page</h1>
      
      </div>
    </>
  );
};


export default Claims