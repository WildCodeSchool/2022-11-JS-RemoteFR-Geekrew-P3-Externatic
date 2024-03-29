const models = require("../models");
const validateCandidacy = require("../validator/candidacyValidator");

const browse = (req, res) => {
  models.candidacy
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
  models.candidacy
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findByJobOffer = (req, res) => {
  models.candidacy
    .findByJobOffer(req.params.jobId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const candidacy = req.body;

  const validationResult = validateCandidacy(candidacy);

  if (validationResult) {
    return res.status(400).send(validationResult);
  }

  candidacy.id = parseInt(req.params.id, 10);

  return models.candidacy
    .update(candidacy)
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
  const candidacy = req.body;

  const validationResult = validateCandidacy(candidacy);

  if (validationResult) {
    return res.status(400).send(validationResult);
  }

  return models.candidacy
    .insert(candidacy)
    .then(([result]) => {
      res.location(`/candidacies/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.candidacy
    .delete(req.params.candidacyId)
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
  findByJobOffer,
};
