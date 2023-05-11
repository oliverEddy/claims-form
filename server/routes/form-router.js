const express = require("express");
const pool = require("../db");
const { auth } = require('express-oauth2-jwt-bearer');
const formRouter = express.Router();


const jwtCheck = auth({
    audience: 'https://ensure-api.com',
    issuerBaseURL: 'https://dev-8a2dkllk1a5kywvs.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });


  app.use(jwtCheck);


  
formRouter.get("/", async (req, res) => {
    console.log('hot reloaded!')
    try {
        const allItems = await pool.query("SELECT * FROM form");
        res.json(allItems.rows);
    } catch (err) {
        console.error(err.message);
    }
});

formRouter.post("/", async (req, res) => {
    try {
        const { policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement } = req.body;
        const newForm = await pool.query(
            "INSERT INTO form (policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement]
        );

        res.json(newForm.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


module.exports = formRouter;