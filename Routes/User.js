const express = require("express");
const router = express.Router();
const { register, login } = require("../Controller/registeration");
const { userProfile,multiImage } = require("../Controller/userImageController");
const {upload}=require('../uttils/multer')

router.post("/register", register);
router.post("/login", login);
router.post("/imageData", upload.single("imageData"), userProfile);
router.post("/multiImage", upload.array("imageData",10), multiImage);

module.exports = { router };
