import { Schema } from "mongoose";

const sensorDataSchema = new Schema(
    {
        _metadata: {
            createdAt: {
                type: Date, 
                default: Date.now
            }
        },
        timestamp: Date,         // time (ISO || Unix timestamp)
        sensorId: Number,        // sensor ID
        temperature: Number,     // temperature
        level: Number,           // level
        flowRate: Number,        // flow rate
        volume: Number           // volume
    }
);


export default sensorDataSchema;