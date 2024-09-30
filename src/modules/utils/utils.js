import mongoose from "mongoose";

// -------------------------------------------------------------------------- //
// Utility functions
// -------------------------------------------------------------------------- //
export const isMongoObjectId = (value) => {
    if (!value) return false;

    const _id = typeof value !== 'string' ? value.toString() : value;
    return _id && _id.length === 24 && mongoose.Types.ObjectId.isValid(_id);
}