import express from "express";
import pool from "../db.js";
import fetch from "node-fetch";
// const { auth } = require('express-oauth2-jwt-bearer');
const claimsRouter = express.Router();
import claimsRepository from "./claims.repository.js";


claimsRouter.post(
  "/",
  // jwtCheck,
  async (req, res) => {
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
      captchaValue
    } = req.body;

    try {
      const newForm = await claimsRepository.createClaim(req.body);
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaValue}`,
        { method: "post" }
      );
      console.log(await response.json());
      res.status(201).send(newForm);
      console.info({
        datetime: new Date(),
        event: `${req.method} /claims`,
        claimId: newForm.rows.claimid,
      });
    } catch (err) {
      err.status = 400;
      err.message = "You have entered incorrect details";
      //   alert(err.message);
    }
  }
);

claimsRouter.get(
  "/",
  // jwtCheck,
  async (req, res) => {
    try {
      const getAllClaims = await claimsRepository.getAllClaims();
      res.send(getAllClaims).status(200);
      console.info({
        datetime: new Date(),
        event: `${req.method} /claims`,
      });
    } catch (err) {
      err.status = 404;
      err.message = "You have entered incorrect details";
      //   alert(err.message);
    }
  }
);


claimsRouter.get(
  "/:id",
  // jwtCheck,
  async (req, res) => {
    try {
      const getSingleClaim = await claimsRepository.getSingleClaim(req.params.id);
      res.send(getSingleClaim).status(200);

      console.info({
        datetime: new Date(),
        event: `${req.method} /claims/:id`,
      });
    } catch (err) {
      err.status = 404;
      err.message = "You have entered incorrect details";
      //   alert(err.message);
    }
  }
);

export default claimsRouter;
