const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

const companyControllers = require("./controllers/companyControllers");

router.get("/companies", companyControllers.browse);
router.get("/companies/:id", companyControllers.read);
router.put("/companies/:id", companyControllers.edit);
router.post("/companies", companyControllers.add);
router.delete("/companies/:id", companyControllers.destroy);

const candidateControllers = require("./controllers/candidateControllers");

router.get("/candidates", candidateControllers.browse);
router.get("/candidates/:id", candidateControllers.read);
router.put("/candidates/:id", candidateControllers.edit);
router.post("/candidates", candidateControllers.add);
router.delete("/candidates/:id", candidateControllers.destroy);

const candidacyControllers = require("./controllers/candidacyControllers");

router.get("/candidacies", candidacyControllers.browse);
router.get("/candidacies/:id", candidacyControllers.read);
router.put("/candidacies/:id", candidacyControllers.edit);
router.post("/candidacies", candidacyControllers.add);
router.delete("/candidacies/:id", candidacyControllers.destroy);

const jobOfferControllers = require("./controllers/jobOfferControllers");

router.get("/job_offers", jobOfferControllers.browse);
router.get("/job_offers/:id", jobOfferControllers.read);
router.put("/job_offers/:id", jobOfferControllers.edit);
router.post("/job_offers", jobOfferControllers.add);
router.delete("/job_offers/:id", jobOfferControllers.destroy);

const contractControllers = require("./controllers/contractControllers");

router.get("/contracts", contractControllers.browse);
router.get("/contracts/:id", contractControllers.read);
router.put("/contracts/:id", contractControllers.edit);
router.post("/contracts", contractControllers.add);
router.delete("/contracts/:id", contractControllers.destroy);

module.exports = router;
