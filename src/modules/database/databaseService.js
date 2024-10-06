import mongoose from "mongoose";
import { isMongoObjectId } from "../utils/utils";

const databaseService = {}

// -------------------------------------------------------------------------- //
// CRUD
// -------------------------------------------------------------------------- //

// Create
databaseService.create = async(data, options) => {
    const { model } = options;
    const doc = new model(data);
    await doc.save();

    return doc;
}


// Read
databaseService.read = async(condition = {}, options) => {
    const { model } = options;
    if (isMongoObjectId(condition)) {
        var data = await model.findById(condition); // find by ObjectId
    } else {
        var data = await model.find(condition); // find all
    }
    return data;
}


// Update
databaseService.update = async(data, condition, options) => {
    const { model } = options;
    if (isMongoObjectId(condition) && model.exists(condition)) {
        const updated = await model.findByIdAndUpdate(condition, data, options);
        return updated;
    }
    return false;
}



// -------------------------------------------------------------------------- //
// Exports
// -------------------------------------------------------------------------- //
export default databaseService;