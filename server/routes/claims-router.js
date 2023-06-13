const express = require("express");
const pool = require("../db");
// const { auth } = require('express-oauth2-jwt-bearer');
const claimsRouter = express.Router();
const claimsRepository = require("./claims.repository");




claimsRouter.post(
  "/",
  // jwtCheck,
  async (req, res) => {
     
    try {
      const newForm = await claimsRepository.createClaim(req.body);
      res.status(201).send(newForm.rows[0]);
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
  "/all",
  // jwtCheck,
  async (req, res) => {
    try {
      const getAllClaims = await pool.query("SELECT * FROM claims");
      res.send(getAllClaims).status(200);
      res.json("Hello World")
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

module.exports = claimsRouter;
