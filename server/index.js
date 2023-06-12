require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const formRouter = require("./routes/form-router");
const claimsRouter = require("./routes/claims-router");

app.use(cors());
app.use(express.json());

app.use("/api/claims", claimsRouter);

app.use("/test", (req, res) => {
  res.json("Hello World");
});



const thePort = process.env.EXPRESS_PORT || 5001;
app.listen(thePort, () => {
  console.log(`server has started on port ${thePort}`);
});
