import SensorData from "./sensorDataModel.js";
import databaseService from "../database/databaseService.js";

const sensorDataService = {}

// -------------------------------------------------------------------------- //
// CRUD
// -------------------------------------------------------------------------- //

// Create
sensorDataService.create = async(data) => {
    const { h, i, t, l, f, v } = data;
    const newData = new SensorData(
        {
            timestamp: h,
            sensorId: i,
            temperature: t,
            level: l,
            flowRate: f,
            volume: v
        }
    )
    const doc = await databaseService.create(data, newData);
    return doc;
}


// -------------------------------------------------------------------------- //
// Exports
// -------------------------------------------------------------------------- //
export default sensorDataService;