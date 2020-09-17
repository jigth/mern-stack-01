const notesController = {};

const Note = require("../models/Note");

notesController.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesController.createNote = async (req, res) => {
    const { title, content, author } = req.body;
    const newNote = new Note({ 
        title,
        content,
        author
    });
    await newNote.save();
    res.json(newNote);
}

notesController.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesController.updateNote = async (req, res) => {
    const { title, content, author } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        author
    }, { new: true });
    res.json(updatedNote);
}

notesController.deleteNote = async (req, res) => {
    const deletedNote = await Note.findOneAndDelete({
        _id: req.params.id
    });
    res.json(deletedNote);
}

module.exports = notesController;