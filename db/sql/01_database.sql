CREATE TYPE claim_status as ENUM ('submitted', 'in progress', 'approved', 'denied');

CREATE TABLE form(
  claimId SERIAL PRIMARY KEY,
  policyNumber INTEGER NOT NULL CHECK (policyNumber <= 99999999),
  customerIdNumber VARCHAR(20) CONSTRAINT check_customerIdNumber CHECK ( customerIdNumber ~* '^[A-Z0-9]+$') NOT NULL,
  condition VARCHAR(255) NOT NULL,
  firstSymptoms DATE,
  symptomDetails VARCHAR(255),
  serviceType VARCHAR (50),
  providerFacility VARCHAR (50),
  alternativeHealthInsurance BOOLEAN,
  consentStatement BOOLEAN NOT NULL,
  claimStatus claim_status DEFAULT 'submitted' NOT NULL 
 );

CREATE TABLE form(
  claimId SERIAL PRIMARY KEY,
  policyNumber INTEGER NOT NULL CHECK (policyNumber <= 99999999),
  customerIdNumber VARCHAR(20) CONSTRAINT check_customerIdNumber CHECK ( customerIdNumber ~* '^[A-Z0-9]+$') NOT NULL,
  condition VARCHAR(255) NOT NULL,
  firstSymptoms DATE,
  symptomDetails VARCHAR(255),
  serviceType VARCHAR (50),
  providerFacility VARCHAR (50),
  alternativeHealthInsurance BOOLEAN,
  consentStatement BOOLEAN NOT NULL,
  claimStatus claim_status DEFAULT 'submitted' NOT NULL 
 );
 
CREATE TABLE claims(
  claimId SERIAL PRIMARY KEY,
  policyNumber INTEGER NOT NULL CHECK (policyNumber <= 99999999),
  customerIdNumber VARCHAR(20) CONSTRAINT check_customerIdNumber CHECK ( customerIdNumber ~* '^[A-Z0-9]+$') NOT NULL,
  condition VARCHAR(255) NOT NULL,
  firstSymptoms DATE NOT NULL,
  symptomDetails VARCHAR(255) NOT NULL,
  serviceType VARCHAR (50) NOT NULL,
  providerFacility VARCHAR (50) NOT NULL,
  alternativeHealthInsurance BOOLEAN NOT NULL,
  consentStatement BOOLEAN NOT NULL,
  claimStatus claim_status DEFAULT 'submitted' NOT NULL 
  -- CHECK (policyNumber IS NOT NULL AND consentStatement = 't')
 );
