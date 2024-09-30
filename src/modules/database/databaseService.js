import mongoose from "mongoose";
import { isMongoObjectId } from "../utils/utils";

const databaseService = {}

// -------------------------------------------------------------------------- //
// CRUD
// -------------------------------------------------------------------------- //
databaseService.create = async(data, options) => {
    const { model } = options;
    const doc = new model(data);
    await doc.save();

    return doc;
}


databaseService.read = async(condition = {}, options) => {
    const { model } = options;
    if (isMongoObjectId(condition)) {
        data = await model.findById(condition); // find by ObjectId
    } else {
        data = await model.find(condition); // find all
    }
    return data;
}


databaseService.update = async() => {
    
}


databaseService.delete = async() => {
    
}

// -------------------------------------------------------------------------- //
// Exports
// -------------------------------------------------------------------------- //
export default databaseService;