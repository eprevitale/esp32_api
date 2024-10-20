import SensorData from "./sensorDataModel.js";
import { isValidObjectId, MongooseError } from "mongoose";

const sensorDataService = {}


// -------------------------------------------------------------------------- //
// CRUD
// -------------------------------------------------------------------------- //

// Create
sensorDataService.create = async (data) => {
    // let options = {};
    // options.model = SensorData;
    try {
        const doc = await SensorData.create(data);
        return doc;
    } catch (error) {
        throw new MongooseError(`Unable to create document: ${error}`);
    }
}


sensorDataService.read = async () => {
    try {
        const doc = SensorData.find();
        return doc;
    } catch (error) {
        throw new MongooseError(`Unable to read documents: ${error}`);
    }
    
}


sensorDataService.readById = async (id) => {
    try {
        if(!isValidObjectId) {
            throw new MongooseError(`Invalid ID.`);
        }
        const doc = SensorData.findById(id);
        return doc;
    } catch (error) {
        throw new Error(`Unable to read documents: ${error}`)
    }
}


// -------------------------------------------------------------------------- //
// Exports
// -------------------------------------------------------------------------- //
export default sensorDataService;