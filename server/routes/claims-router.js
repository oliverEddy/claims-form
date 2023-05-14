const express = require("express");
const pool = require("../db");
// const { auth } = require('express-oauth2-jwt-bearer');
const claimsRouter = express.Router();

// const jwtCheck = auth({
//     audience: 'https://ensure-api.com',
//     issuerBaseURL: 'https://dev-8a2dkllk1a5kywvs.us.auth0.com/',
//     tokenSigningAlg: 'RS256'
//   });

claimsRouter.post(
  "/",
  // jwtCheck,
  async (req, res) => {
    try {
      const {
        policyNumber,
        customerIdNumber,
        condition,
        firstSymptoms,
        symptomDetails,
        serviceType,
        providerFacility,
        alternativeHealthInsurance,
        consentStatement,
      } = req.body;
      const newForm = await pool.query(
        "INSERT INTO claims (policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
        [
          policyNumber,
          customerIdNumber,
          condition,
          firstSymptoms,
          symptomDetails,
          serviceType,
          providerFacility,
          alternativeHealthInsurance,
          consentStatement,
        ]
      );
      res.status(201).json(newForm.rows[0]);
      console.info({
          datetime: new Date(),
          event: `${req.method} /claims`,
          claimId: newForm.rows[0].claimid,
        });
    } catch (err) {
        err.status = 400;
        err.message = "You have entered incorrect details";
      //   alert(err.message);
    }
  }
);

module.exports = claimsRouter;
