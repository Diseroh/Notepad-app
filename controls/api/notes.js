const Note = require("../../db/models/note.js");

module.exports = {
  saveNote: (request, response) => {
    const newNote = new Note({
      title: "test 3 ",
      content: "test 3 ",
    });

    newNote.save().then(() => {
      console.log("powiodło się znowu ");
    });
    response.send("working!!!!");
  },
};
