const express = require("express");
const upload = require("../middlewares/multer-config");

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "Please upload a file." });
  }
  res.send({ filePath: `uploads/${req.file.filename}` });
});

module.exports = router;
