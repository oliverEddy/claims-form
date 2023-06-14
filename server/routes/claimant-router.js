const express = require("express");
const pool = require("../db");
// const { auth } = require('express-oauth2-jwt-bearer');
const claimantRouter = express.Router();
const claimantRepository = require("./claims.repository");



claimantRouter.get(
  "/",
  // jwtCheck,
  async (req, res) => {
    try {
      const getAllClaimants = await claimantRepository.getAllClaimants();
      res.send(getAllClaimants).status(200);
      console.info({
          datetime: new Date(),
          event: `${req.method} /claimants`,
        });
    } catch (err) {
        err.status = 404;
        err.message = "You have entered incorrect details";
      //   alert(err.message);
    }
  }
);



claimantRouter.get(
  "/:id",
  // jwtCheck,
  async (req, res) => {
    id = req.params.id;
    try {
      const getSingleClaimant = await claimantRepository.getSingleClaimant(id);
      res.send(getSingleClaimant).status(200);
      
      console.info({
          datetime: new Date(),
          event: `${req.method} /claimant/:id`,
        });
    } catch (err) {
        err.status = 404;
        err.message = "You have entered incorrect details";
      //   alert(err.message);
    }
  }
);

export default claimantRouter;