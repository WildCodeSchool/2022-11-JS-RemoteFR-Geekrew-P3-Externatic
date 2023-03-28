const argon2 = require("argon2");
const models = require("../models");
const validateCandidate = require("../validator/candidateValidator");

const browse = (req, res) => {
  models.candidate
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
  models.candidate
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
  const candidate = req.body;

  const validationResult = validateCandidate(candidate);

  if (validationResult) {
    return res.status(400).send(validationResult);
  }

  candidate.id = parseInt(req.params.id, 10);

  return models.candidate
    .update(candidate)
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

const add = async (req, res) => {
  try {
    const candidate = JSON.parse(req.body.candidate);

    const validationResult = validateCandidate(candidate);

    if (validationResult.length) {
      res.status(400).send(validationResult);
    } else if (validationResult.length === 0) {
      const hashingOptions = {
        type: argon2.argon2id,
        memoryCost: 2 ** 19,
        timeCost: 5,
        parallelism: 1,
      };

      const hashedPassword = await argon2.hash(
        candidate.password,
        hashingOptions
      );

      candidate.password = hashedPassword;

      const [userResult] = await models.candidate.insertCandidateIntoUser(
        candidate
      );

      const candidateUserId = userResult.insertId;

      const [candidateResult] =
        await models.candidate.insertCandidateIntoCandidate(
          candidate,
          candidateUserId
        );

      const candidateLastInsertId = candidateResult.insertId;

      const hardSkillsArray = candidate.hard_skills.split(",");

      hardSkillsArray.forEach((hardSkill) => {
        models.candidate.insertCandIntoCandHasTechno(
          hardSkill,
          candidateLastInsertId
        );
      });

      models.candidate.updatePicture(
        req.files.picture[0].filename,
        candidateUserId
      );

      models.candidate.updateCV(
        req.files.cv[0].filename,
        candidateLastInsertId
      );

      res.location(`/candidates/${candidateResult.insertId}`).sendStatus(201);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroy = (req, res) => {
  models.candidate
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
