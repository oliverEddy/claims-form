require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { auth } = require('express-oauth2-jwt-bearer');
const claimsRouter = require("./routes/claims-router");
const claimantRouter = require("./routes/claimant-router");




app.use(cors());
app.use(express.json());


const checkJwt = auth({
  audience: 'https://ensure-api.com',
  issuerBaseURL: 'https://dev-8a2dkllk1a5kywvs.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});



app.use(checkJwt)

app.use("/api/claims", claimsRouter);

app.use("/test", (req, res) => {
  res.json("Hello World");
});



const thePort = process.env.EXPRESS_PORT || 5001;
app.listen(thePort, () => {
  console.log(`server has started on port ${thePort}`);
});
