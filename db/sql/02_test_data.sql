INSERT INTO claimants (customerIdNumber, claimantName, claimantAddress, claimantEmail, claimantPhone, claimantNextOfKin, claimantPolicyNumber, preExistingMedicalConditions, bankAccountNumber) VALUES ('HJ567', 'Mike Jones', '1 Shortland Street Auckland', 'mikejones@gmail.com', '02189783495', 'June Jones, Mother, 023489999', 78945612, 'Asthma', '12389899'); 

INSERT INTO claimants (customerIdNumber, claimantName, claimantAddress, claimantEmail, claimantPhone, claimantNextOfKin, claimantPolicyNumber, preExistingMedicalConditions, bankAccountNumber) VALUES ('AJ385', 'Alex Price', '10 Padma Terrace Auckland', 'alexprice1990@gmail.com', '02148503859', 'Jim Price, Father, 0210204938', 38484828, 'Epilepsy', '65577789'); 
 
INSERT INTO claimants (customerIdNumber, claimantName, claimantAddress, claimantEmail, claimantPhone, claimantNextOfKin, claimantPolicyNumber, preExistingMedicalConditions, bankAccountNumber) VALUES ('DJ395', 'Sarah Smith', '151 Lake Street Tauranga', 'sarahjanesmith@gmail.com', '0233399339', 'Michael Smith, Husband, 02138492957', 38486693, 'Post Natal Depression', '48392000');  

INSERT INTO claimants (customerIdNumber, claimantName, claimantAddress, claimantEmail, claimantPhone, claimantNextOfKin, claimantPolicyNumber, preExistingMedicalConditions, bankAccountNumber) VALUES ('FJ499', 'Nick Harris', '15 Miramar Street Auckland', 'nickharrisss449@gmail.com', '0214829194', 'Lucy Harrison, Girlfriend, 0213348848', 49553859, 'Depression', '447277001');  
 
INSERT INTO claimants (customerIdNumber, claimantName, claimantAddress, claimantEmail, claimantPhone, claimantNextOfKin, claimantPolicyNumber, preExistingMedicalConditions, bankAccountNumber) VALUES ('JG385', 'Mike Ng', '543 Dominion Road Auckand', 'ngmike@gmail.com', '0213820994', 'Celeste Ng, Sister, 0218839993', 38295838, 'Multiple Sclerosis', '4381888283');    

INSERT INTO claims (policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement, claimStatus)
VALUES (38295838, 'JG385', 'Fall', '20230412', 'pain, trouble standing', 'ED', 'Shortland Street Hospital', FALSE, TRUE, 'submitted'); 
 
INSERT INTO claims (policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement, claimStatus)
VALUES (38486693, 'DJ395', 'Migraine', '20230401', 'headache', 'ED', 'Shortland Street Hospital', FALSE, TRUE, 'submitted'); 
 
INSERT INTO claims (policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement, claimStatus)
VALUES (38484828, 'AJ385', 'Seizure', '20230301', 'seizure', 'ED', 'Shortland Street Hospital', FALSE, TRUE, 'submitted'); 
 
 
INSERT INTO claims (policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement, claimStatus)
VALUES (78945612, 'HJ567', 'broken leg', '20230330', 'pain', 'x-ray', 'Pacific Radiology: Wanaka', FALSE, TRUE, 'submitted');

INSERT INTO claims (policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement, claimStatus)
VALUES (87787765, 'HJ567', 'broken leg', '20230530', 'pain', 'physio', 'Auckland Physio', FALSE, TRUE, 'submitted');

INSERT INTO claims (policyNumber, customerIdNumber, condition, firstSymptoms, symptomDetails, serviceType, providerFacility, alternativeHealthInsurance, consentStatement, claimStatus)
VALUES (78945612, 'HJ567', 'broken leg', '20230330', 'pain', 'x-ray', 'Pacific Radiology: Wanaka', FALSE, TRUE, 'submitted');
