const express = require("express");
const router = express.Router();
const { register, login } = require("../Controller/registeration");
const { userProfile } = require("../Controller/userImageController");

var multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, "upload/");
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});

router.post("/register", register);
router.post("/login", login);
router.post("/imageData", upload.single("imageData"), userProfile);
module.exports = { router };
