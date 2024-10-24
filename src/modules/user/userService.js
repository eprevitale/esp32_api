import bcrypt from "bcrypt";
import User from "./userModel.js";
import { isValidEmail, isValidName } from "../utils/utils.js";
import { MongooseError } from "mongoose";


// -------------------------------------------------------------------------- //
// Services
// -------------------------------------------------------------------------- //

const userService = {};


// Auxiliary function
userService.isEmailAlreadyRegistered = async (email) => {
    const search = await User.findOne({ email: email });
    return search !== null;
}


userService.create = async (name, lastName, email, password) => {

    if (!isValidName(name)) {
        throw new Error(`Invalid name.`);
    }
    if (!isValidName(lastName)) {
        throw new Error(`Invalid last name.`);
    }
    if (!isValidEmail(email)) {
        throw new Error(`Invalid e-mail.`);
    }
    if (isEmailAlreadyRegistered(email)) {
        throw new Error(`E-mail already registered.`);
    }

    const hash = await bcrypt.hash(password, 12);

    const credentials = {
        name: name, 
        lastName: lastName, 
        email: email, 
        password: hash
    };

    try {
        const doc = await User.create(credentials);
        return doc;
    } catch (err) {
        throw new MongooseError(`Unable to create user: ${err}`);
    }
}


userService.read = async () => {
    try {
        const doc = await User.find();
        return doc;
    } catch (err) {
        throw new MongooseError(`Unable to find user: ${err}`);
    }
}


export default userService;