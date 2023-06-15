// import "./Homepage.css";
// import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import Claims from "./Claims";
// import InputForm from "./InputForm.js";

// const Homepage = () => {

//   const { user } = useAuth0();
//   const [render, setRender] = useState("approver");


//   return (


//     if (render === "unauthorized") {
//       return (

//         <>
//         <h1>Keeping the unexpected, uncomplicated</h1>
//         <div className="home-container">
//         <div className="center-home-pic">
//         <img
//         src="ensurepic.jpg"
//         alt="pic of healthy active family"
//         className="home-pic"
//         />
//         </div>
//         <p>Leading the industry in Trust, Wellbeing, Safety, Compassion
//         Our Advisors are professionals with specialist knowledge to assist you
//         in selecting and tailoring your cover to suit your individual
//         circumstances. All of our staff are experienced and trained to best
//         help and support you in your time of need.
//         </p>
//         </div>
//         </>
//         )
//     }


//     if (render === "approver") {
//       return (
//         <Claims />
//       )
//     }


//     if (render === "claimant") {
//       return (
//         <InputForm />
//       )
//     }


//   );
    
// };

// export default Homepage;




import "./Homepage.css";
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Claims from "./Claims";
import InputForm from "./InputForm";


const Homepage = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [render, setRender] = useState("");

useEffect(() => {
  if (user === undefined || user === null) {
    setRender("unauthorized");
  } else if (user["https://ensure-api.com/roles"].includes("enSURE Approver")) {
    setRender("approver");
  } else {
    setRender("claimant");
  } 
}, [user, getAccessTokenSilently]);


if (render === "approver") {
  return (
    <>
    <Claims />
    </>
  );
}


// this screen will be for if the user is a claimant

if (render === "claimant") {
  return (
    <>
    <InputForm />
    </>
  );
};



// this screen is for people not being signed in and will be the default.

return (
  <>
      <h1>Keeping the unexpected, uncomplicated</h1>
      <div className="home-container">
        <div className="center-home-pic">
          <img
            src="ensurepic.jpg"
            alt="pic of healthy active family"
            className="home-pic"
          />
        </div>
        <p>Leading the industry in Trust, Wellbeing, Safety, Compassion
          Our Advisors are professionals with specialist knowledge to assist you
          in selecting and tailoring your cover to suit your individual
          circumstances. All of our staff are experienced and trained to best
          help and support you in your time of need.
        </p>
        {/* <button className="login-button">{LogInButton}Log In</button> */}
      </div>
    </>
  );
};



export default Homepage;
