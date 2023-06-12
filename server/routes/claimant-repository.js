const db = require("../db");


module.exports = {

  getSingleClaimant: async (id) => {
    try {
      const claim = await db.query("SELECT * FROM claims WHERE customerIdNumber = $1", [
        id,
      ]);

      if (claim.rows.length === 0) {
        throw new Error("No customer with that id");
      }

      return claim.rows[0];
    } catch (err) {
      throw new Error(err);
    }
  },

  getAllClaimsants: async () => {
    try {
      const claims = await db.query("SELECT * FROM claims");

      if (claims.rows.length === 0) {
        throw new Error("No customers have been found");
      }

      return claims.rows;
    } catch (err) {
      throw new Error(err);
    }
  }

};