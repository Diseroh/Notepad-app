const express = require("express");
const router = express.Router();
const notesControls = require("../controls/api/notesControls.js");

//Save Note
router.post("/notes", notesControls.saveNote);
//Download all Notes
router.get("/notes", notesControls.getAllNotes);
//Download specific note
router.get("/notes/:id", notesControls.getNote);
//Edit Note
router.put("/notes/:id", notesControls.updateNote);
//Delete Note
router.delete("/notes/:id", notesControls.deleteNote);

module.exports = router;
