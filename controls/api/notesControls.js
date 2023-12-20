const Note = require("../../db/models/note.js");
//Actions
module.exports = {
  //create a note
  saveNote: async (request, response) => {
    const title = request.body.title;
    const content = request.body.content;
    let note;

    try {
      note = new Note({
        title: title,
        content: content,
      });
      await note.save();
    } catch (error) {
      return response.status(422).json({ message: error.message });
    }

    response.status(200).json(note);
  },
  //Download all Notes
  getAllNotes: async (request, response) => {
    let doc;
    try {
      doc = await Note.find({});
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
    response.status(200).json(doc);
  },
  //Download a note
  getNote: async (request, response) => {
    const id = request.params.id;
    const note = await Note.findOne({ _id: id });
    response.status(201).json(note);
  },
  //Update note
  updateNote: async (request, response) => {
    const id = request.params.id;
    const title = request.body.title;
    const content = request.body.content;
    const note = await Note.findOne({ _id: id });
    note.title = title;
    note.content = content;
    await note.save();

    response.status(201).json(note);
  },
  //Delete note
  deleteNote: async (request, response) => {
    const id = request.params.id;
    await Note.deleteOne({ _id: id });

    response.sendStatus(204);
  },
};
