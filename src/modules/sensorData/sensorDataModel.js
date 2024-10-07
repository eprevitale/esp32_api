import mongoose from "mongoose";
import sensorDataSchema from "./sensorDataSchema.js";

const SensorData = new mongoose.model("SensorData", sensorDataSchema, 'sensor-data');

export default SensorData;