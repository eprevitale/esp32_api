import bcrypt from "bcrypt";
import User from "./userModel.js";
import { isValidEmail, isValidName } from "../utils/utils.js";
import { MongooseError } from "mongoose";


// -------------------------------------------------------------------------- //
// Services
// -------------------------------------------------------------------------- //

const userService = {};


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


export default userService;