import { Schema } from "mongoose";

const sensorDataSchema = new Schema(
    {
        timestamp: Date,         // time (ISO || Unix timestamp)
        sensorId: Number,        // sensor ID
        temperature: Number,     // temperature
        level: Number,           // level
        flowRate: Number,        // flow rate
        volume: Number           // volume
    },
    {
        timestamps: true
    }
);


export default sensorDataSchema;