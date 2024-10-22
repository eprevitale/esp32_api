import mongoose from "mongoose";

// -------------------------------------------------------------------------- //
// Utility functions
// -------------------------------------------------------------------------- //
export const isMongoObjectId = (value) => {
    if (!value) return false;

    const _id = typeof value !== 'string' ? value.toString() : value;
    return _id && _id.length === 24 && mongoose.Types.ObjectId.isValid(_id);
}


export const isValidName = (name) => {
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    return regex.test(name);
}


export const isValidEmail = (email) => {
    let regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}(?:\.[a-z]{2,}){0,2}$/i;
    return regex.test(email);
}