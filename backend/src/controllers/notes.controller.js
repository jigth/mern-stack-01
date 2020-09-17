const notesController = {};

notesController.getNotes = (req, res) => {
    res.json({ action: "getNotes"});
}

notesController.createNote = (req, res) => {
    res.json({ action: "createNote" });
}

notesController.getNote = (req, res) => {
    res.json({ action: "getNote"});
}

notesController.updateNote = (req, res) => {
    res.json({ action: "updateNote"});
}

notesController.deleteNote = (req, res) => {
    res.json({ action: "deleteNote"});
}

module.exports = notesController;