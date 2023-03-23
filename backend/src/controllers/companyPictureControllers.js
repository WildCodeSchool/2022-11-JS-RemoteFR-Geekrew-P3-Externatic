const models = require("../models");

const addCompanyImage = (req, res) => {
  const companyId = req.params.id;

  models.picture
    .update(req.file.filename, companyId)
    .then((result) => {
      if (result[0] === 0) {
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

module.exports = { addCompanyImage };
