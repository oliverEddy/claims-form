const db = require("../db");

module.exports = {
  createClaim: async () => {
    try {
      const newClaim = await db.query("INSERT INTO claims (policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        policyNumber,
        customerIdNumber,
        condition,
        firstSymptoms,
        symptomDetails,
        serviceType,
        providerFacility,
        alternativeHealthInsurance,
        consentStatement,
      ]);

      

      return claim.rows;
    } catch (err) {
      throw new Error(err);
    }
  },

  getSingleClaim: async (id) => {
    try {
      const claim = await db.query("SELECT * FROM claims WHERE claimid = $1", [
        id,
      ]);

      if (claim.rows.length === 0) {
        throw new Error("No claim with that id");
      }

      return claim.rows[0];
    } catch (err) {
      throw new Error(err);
    }
  },

  getAllClaims: async () => {
    try {
      const claims = await db.query("SELECT * FROM claims");

      if (claims.rows.length === 0) {
        throw new Error("No claims");
      }

      return claims.rows;
    } catch (err) {
      throw new Error(err);
    }
  }
};