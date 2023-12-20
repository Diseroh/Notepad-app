const Note = require("../../db/models/note.js");
//Actions
module.exports = {
  saveNote: (request, response) => {
    //const newNote = new Note({
    //title: "test 4 ",
    //content: "test 4 ",
    //});

    //newNote.save().then(() => {
    //console.log("powiodło się znowu ");
    //});
    const title = request.body.title;
    const content = request.body.content;

    response.send("zapis działa " + title + "content: " + content);
  },
  getAllNotes: (request, response) => {
    response.send("pobieranie działa!");
  },
  getNote: (request, response) => {
    response.send("pobieranie jednej działa!");
  },
  updateNote: (request, response) => {
    response.send("edycja działa!");
  },
  deleteNote: (request, response) => {
    const id = request.params.id;
    response.send("usuwanie działa! ID: " + id);
  },
};
