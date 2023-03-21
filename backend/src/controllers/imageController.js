/* eslint-disable no-restricted-syntax */
const { addOne } = require("../models/ImageManager");

const createOne = async (req, res) => {
  try {
    const result = await addOne({
      name: req.body.name,
      file_name: req.file.filename,
    });

    if (result) res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

module.exports = { createOne };
