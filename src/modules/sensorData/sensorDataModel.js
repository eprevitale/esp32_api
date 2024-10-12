import mongoose from "mongoose";
import sensorDataSchema from "./sensorDataSchema.js";

const SensorData = mongoose.model("SensorData", sensorDataSchema, 'sensor-data');

export default SensorData;