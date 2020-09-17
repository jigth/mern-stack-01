const userController = {};

userController.getUsers = (req, res) => {
    res.json({ action: "getUsers" });
}

userController.createUser = (req, res) => {
    res.json({ action: "createUser" });
}

userController.getUser = (req, res) => {
    res.json({ action: "getUser" });
}

userController.updateUser = (req, res) => {
    res.json({ action: "updateUser" });
}

userController.deleteUser = (req, res) => {
    res.json({ action: "deleteUser" });
}

module.exports = userController;