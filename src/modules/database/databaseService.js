import { isMongoObjectId } from "../utils/utils.js";

const databaseService = {}

// -------------------------------------------------------------------------- //
// CRUD
// -------------------------------------------------------------------------- //

// Create
databaseService.create = async(data, options) => {
    const { model } = options;
    console.log(data)
    const doc = new model(data);
    await doc.save();

    return doc;
}


// Read
databaseService.read = async(condition = {}, options) => {
    const { model } = options;

    const data = await model.find(condition);

    return data;
}


databaseService.readOne = async(condition = {}, options) => {
    const { model } = options;

    const data = await model.findOne(condition);

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


// Delete
databaseService.deleteOne = async(condition, options) => {
    const { model } = options;
    if (isMongoObjectId(condition) && model.exists(condition)) {
        const deleted = await model.deleteOne(condition);
        return deleted;
    }
    return false;
}

databaseService.deleteMany = async(condition, options) => {
    const { model } = options;
    const deleted = await model.deleteMany(condition);
    return deleted
}

// -------------------------------------------------------------------------- //
// Exports
// -------------------------------------------------------------------------- //
export default databaseService;