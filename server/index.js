// require("dotenv").config();
import express from "express";
const app = express();
import cors from "cors";
import claimsRouter from "./routes/claims-router.js";
import claimantRouter from "./routes/claimant-router.js";


//middleware
app.use(cors());
app.use(express.json());

app.use("/api/claims", claimsRouter);
// app.use("/api/claimants", claimantRouter);

app.use("/test", (req, res) => {
  res.json("Hello World");
});



const thePort = process.env.EXPRESS_PORT || 5001;
app.listen(thePort, () => {
  console.log(`server has started on port ${thePort}`);
});
