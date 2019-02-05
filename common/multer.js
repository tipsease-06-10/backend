const multer = require("multer");
const datauri = require("datauri");
const path = require("path");
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single("image");
const dUri = new datauri();

const dataUri = req => {
  return dUri.format(
    path.extname(req.file.originalname).toString(),
    req.file.buffer
  );
};
module.exports = { multerUploads, dataUri };
