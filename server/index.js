require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const claimsRouter = require("./routes/claims-router");
const claimantRouter = require("./routes/claimant-router");




app.use(cors());
app.use(express.json());

app.use("/api/claims", claimsRouter);
app.use("api/claimants", claimantRouter);

app.use("/test", (req, res) => {
  res.json("Hello World");
});



const thePort = process.env.EXPRESS_PORT || 5001;
app.listen(thePort, () => {
  console.log(`server has started on port ${thePort}`);
});
