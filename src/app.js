import express from 'express';
import bodyParser from 'body-parser';
import env from './config.js';
import db from './config/db.js'

// --------------------------------------------
// Configs
// --------------------------------------------

const { HOSTNAME, PORT, MONGO_URL } = env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// --------------------------------------------
// Routing
// --------------------------------------------
import apiRoutesV1 from './config/apiRoutesV1.js';

// Set routes
app.use('/api/v1', apiRoutesV1);


// --------------------------------------------
// Database
// --------------------------------------------
await db.connect(MONGO_URL);


// --------------------------------------------
// Server
// --------------------------------------------
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
})