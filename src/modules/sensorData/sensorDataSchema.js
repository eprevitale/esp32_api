import { Schema } from "mongoose";

const sensorDataSchema = new Schema(
    {
        rpm_engine_1: Number,
        rpm_engine_2: Number,
        volume: Number,
        flow_rate: Number,
        temperature: Number
    },
    {
        timestamps: true
    }
);


export default sensorDataSchema;