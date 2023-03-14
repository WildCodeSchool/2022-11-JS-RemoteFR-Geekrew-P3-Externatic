const argon2 = require("argon2");
const models = require("../models");
const validateCompany = require("../validator/companyValidator");

const browse = (req, res) => {
  models.company
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
  models.company
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
  const company = req.body;

  const validationResult = validateCompany(company);

  if (validationResult) {
    return res.status(400).send(validationResult);
  }

  company.id = parseInt(req.params.id, 10);

  return models.company
    .update(company)
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
    const company = req.body;

    const validationResult = validateCompany(company);

    if (validationResult.length) {
      res.status(400).send(validationResult);
    }

    const hashingOptions = {
      type: argon2.argon2id,
      memoryCost: 2 ** 19,
      timeCost: 5,
      parallelism: 1,
    };

    const hashedPassword = await argon2.hash(company.password, hashingOptions);

    company.password = hashedPassword;

    const [userResult] = await models.company.insertCompanyIntoUser(company);

    const companyUserId = userResult.insertId;

    const [companyResult] = await models.company.insertCompanyIntoCompany(
      company,
      companyUserId
    );

    res.location(`/companies/${companyResult.insertId}`).sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroy = (req, res) => {
  models.company
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
