/* eslint-disable import/no-extraneous-dependencies */
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const MIME_TYPES = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];

    callback(null, `${name}-${uuidv4()}.${extension}`);
  },
});

module.exports = multer({ storage }).single("file");
