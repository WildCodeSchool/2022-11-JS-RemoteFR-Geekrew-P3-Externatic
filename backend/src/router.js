const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

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

const jobOfferControllers = require("./controllers/jobOfferControllers");

router.get("/job_offers", jobOfferControllers.browse);
router.get("/job_offers/:id", jobOfferControllers.read);
router.put("/job_offers/:id", jobOfferControllers.edit);
router.post("/job_offers", jobOfferControllers.add);
router.delete("/job_offers/:id", jobOfferControllers.destroy);

module.exports = router;
