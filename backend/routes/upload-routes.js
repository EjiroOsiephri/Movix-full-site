const express = require("express");
const upload = require("../middlewares/multer-config");

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  res.status(201).json({ filePath: req.file.path });
});

module.exports = router;
