const express = require("express");

const router = express.Router();

require("dotenv").config();

// const path = require("path");

const cors = require("cors");

const {
  hashPassword,
  verifyPassword,
  /* verifyToken */ logout,
} = require("./auth");

const userControllers = require("./controllers/userControllers");

router.post(
  "/login",
  userControllers.getUserByEmailAndPasswordAndNext,
  verifyPassword
);
router.get("/logout", logout);

router.post("/users", hashPassword, userControllers.add);

// uploader - pictures
router.use(express.json());
router.use(cors());

const fileUpload = require("./middleware/multer");

const { addUserImage } = require("./controllers/pictureController");

router.put("/users/:id/picture", fileUpload, addUserImage);

// router.use("/", express.static(path.join(__dirname, "../public")));
// router.use(
//   "/uploads",
//   express.static(path.join(__dirname, "../public/uploads"))
// );

// end

// Protected routes
// router.use(verifyToken);

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", hashPassword, verifyPassword, userControllers.edit);
router.delete(
  "/users/:id",
  hashPassword,
  verifyPassword,
  userControllers.destroy
);

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

const consultantControllers = require("./controllers/consultantControllers");

router.get("/consultants", consultantControllers.browse);
router.get("/consultants/:id", consultantControllers.read);
router.put("/consultants/:id", consultantControllers.edit);
router.post("/consultants", consultantControllers.add);
router.delete("/consultants/:id", consultantControllers.destroy);

const favoriteControllers = require("./controllers/favoriteControllers");

router.get("/favorites", favoriteControllers.browse);
router.get("/favorites/:id", favoriteControllers.read);
router.put("/favorites/:id", favoriteControllers.edit);
router.post("/favorites", favoriteControllers.add);
router.delete("/favorites/:id", favoriteControllers.destroy);

module.exports = router;
