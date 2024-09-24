import express from 'express';
import bodyParser from 'body-parser';
import { env } from 'node:process';

// --------------------------------------------
// Configs
// --------------------------------------------

// env
const { HOSTNAME, PORT } = env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// --------------------------------------------
// Routing
// --------------------------------------------

// Import routes
import apiRoutesV1 from './config/apiRoutesV1.js';

// Set routes
app.use('/api/v1', apiRoutesV1);


// --------------------------------------------
// Server
// --------------------------------------------

// Server start
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
})