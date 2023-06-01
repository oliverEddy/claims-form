// const express = require("express");
// const pool = require("../db");
// // const { auth } = require('express-oauth2-jwt-bearer');
// const formRouter = express.Router();


// // const jwtCheck = auth({
// //     audience: 'https://ensure-api.com',
// //     issuerBaseURL: 'https://dev-8a2dkllk1a5kywvs.us.auth0.com/',
// //     tokenSigningAlg: 'RS256'
// //   });



// formRouter.get("/", async (req, res) => {
//     console.log('hot reloaded!')
//     try {
//         const allItems = await pool.query("SELECT * FROM form");
//         res.json(allItems.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });


// module.exports = formRouter;