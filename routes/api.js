const express = require("express");
const router = express.Router();
const notesControls = require("../controls/api/notes.js");

router.get("/", notesControls.saveNote);

module.exports = router;
