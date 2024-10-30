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


// Auxiliary function
userService.changePassword = async (id, new_password) => {
    const hash = await bcrypt.hash(new_password, 12);
    const doc = await User.updateOne({ _id: id }, { password: hash });
    return doc;
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
        throw new MongooseError(`Unable to find users: ${err}`);
    }
}


userService.readById = async (id) => {
    try {
        const doc = await User.findById(id);
        return doc;
    } catch (err) {
        throw new MongooseError(`Unable to find user: ${err}`);
    }
}


userService.update = async (id, data) => {
    try {
        const { password } = data;

        if (password) {
            const hash = await bcrypt.hash(password, 12);
            data = {
                ...data,
                password: hash
            }
        }

        await User.findByIdAndUpdate(id, data);
        return await User.findById(id);
    } catch (err) {
        throw new MongooseError(`Unable to update user: ${err}`);
    }
}


export default userService;