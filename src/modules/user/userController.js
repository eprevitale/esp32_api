import userService from "./userService.js";

// -------------------------------------------------------------------------- //
// Requests
// -------------------------------------------------------------------------- //

const userController = {}


userController.create = async (req, res) => {
    const {
        name,
        lastName,
        email,
        password
    } = req.body;

    if (!name) {
        return res.status(422).json({ msg: "The name is required!" });
    }
    if (!lastName) {
        return res.status(422).json({ msg: "The last name is required!" });
    }
    if (!email) {
        return res.status(422).json({ msg: "The email is required!" });
    }
    if (!password) {
        return res.status(422).json({ msg: "The password is required!" });
    }

    try {
        const doc = await userService.create(name, lastName, email, password);
        return res.status(201).json({
            msg: "User created successfully.",
            doc
        });
    } catch (err) {
        return res.status(500).json({ msg: `${err}` });
    }
}


userController.read = async (req, res) => {
    try {
        const doc = await userService.read();
        if (!doc) {
            return res.status(404).json({ msg: "User not found." });
        }
        return res.status(200).json({ doc });
    } catch (err) {
        return res.status(500).json({ msg: `${err}` });
    }
}


userController.readById = async (req, res) => {

}


userController.update = async (req, res) => {

}


userController.delete = async (req, res) => {

}



export default userController;