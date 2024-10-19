import SensorData from "./sensorDataModel.js";
import databaseService from "../database/databaseService.js";

const sensorDataService = {}

// -------------------------------------------------------------------------- //
// CRUD
// -------------------------------------------------------------------------- //

// Create
sensorDataService.create = async (data) => {
    let options = {};
    options.model = SensorData;
    const doc = await databaseService.create(data, options);
    return doc;
}


sensorDataService.read = async () => {
    let options = {};
    options.model = SensorData;
    const doc = databaseService.read({}, options);
    return doc;
}


sensorDataService.readById = async (id) => {
    let options = {};
    options.model = SensorData;
    const doc = databaseService.readOne({ _id: id }, options);
    return doc;
}


// -------------------------------------------------------------------------- //
// Exports
// -------------------------------------------------------------------------- //
export default sensorDataService;