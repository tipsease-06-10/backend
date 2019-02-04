const multer = require("multer");
const upload = multer({ dest: "uploads/img" });
const route = express.Router();
