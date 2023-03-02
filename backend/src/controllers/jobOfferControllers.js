const models = require("../models");
const validateJobOffer = require("../validator/jobOfferValidator");

const browse = (req, res) => {
  models.jobOffer
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.jobOffer
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const jobOffer = req.body;

  // Validation de l'offre d'emploi

  const validationResult = validateJobOffer(jobOffer);

  if (validationResult) {
    return res.status(400).send(validationResult);
  }

  jobOffer.id = parseInt(req.params.id, 10);

  return models.jobOffer
    .update(jobOffer)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const jobOffer = req.body;

  const validationResult = validateJobOffer(jobOffer);

  if (validationResult) {
    return res.status(400).send(validationResult);
  }

  return models.jobOffer
    .insert(jobOffer)
    .then(([result]) => {
      res.location(`/job_offers/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.jobOffer
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
