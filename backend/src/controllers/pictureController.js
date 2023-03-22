/* eslint-disable no-restricted-syntax */
const models = require("../models");

const addUserImage = (req, res) => {
  const { userId } = req.params;
  const { picture } = req.body;

  models.user
    .update({ picture }, { where: { id: userId } })
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

module.exports = { addUserImage };
