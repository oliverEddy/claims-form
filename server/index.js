// require("dotenv").config();
import express from "express";
const app = express();
import cors from "cors";
// const formRouter = require("./routes/form-router");
import claimsRouter from "./routes/claims-router";

//middleware
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
