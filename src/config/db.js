import mongoose from "mongoose";
import env from '../config.js';
import SaveOptions from "mongoose/lib/options/saveOptions.js";

const { MONGO_URL, MONGO_DB_NAME, MONGO_COLLECTION_NAME } = env;

const db = mongoose.connection;

db.on('connecting', () => { console.log("Connecting to database, please hold on..."); });
db.on('open', () => { console.log("Successfully connected to database!"); });
db.on('error', err => { console.error(`Database error: ${err}`); });
db.on('disconnecting', () => { console.log("Disconnecting from database...") });
db.on('disconnected', () => { console.log("Disconnected from database.") });
db.on('reconnected', () => { console.log("Reconnected to database.") });
db.on('close', () => { console.log("Connection closed.") });

let options = {};
options.dbName = MONGO_COLLECTION_NAME
await mongoose.connect(MONGO_URL + MONGO_DB_NAME, options );