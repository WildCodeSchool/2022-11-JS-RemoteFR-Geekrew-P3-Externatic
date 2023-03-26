const models = require("../models");

const addUserCv = (req, res) => {
  const userId = req.params.id;

  models.cv
    .update(req.file.filename, userId)
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

module.exports = { addUserCv };
