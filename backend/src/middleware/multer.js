/* eslint-disable no-restricted-syntax */
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const MIME_TYPES = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
  "application/pdf": "pdf",
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

module.exports = multer({ storage }).fields([
  { name: "file", maxCount: 1 },
  { name: "cv", maxCount: 1 },
  { name: "picture", maxCount: 1 },
]);
