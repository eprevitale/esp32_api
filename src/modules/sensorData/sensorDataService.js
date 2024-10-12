import SensorData from "./sensorDataModel.js";
import databaseService from "../database/databaseService.js";
import SaveOptions from "mongoose/lib/options/saveOptions.js";

const sensorDataService = {}

// -------------------------------------------------------------------------- //
// CRUD
// -------------------------------------------------------------------------- //

// Create
sensorDataService.create = async(data) => {
    let options = {};
    options.model = SensorData;
    const doc = await databaseService.create(data, options);
    return doc;
}


// -------------------------------------------------------------------------- //
// Exports
// -------------------------------------------------------------------------- //
export default sensorDataService;