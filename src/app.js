import express from 'express';
import bodyParser from 'body-parser';
import env from './config.js';
import './config/db.js'

// --------------------------------------------
// Configs
// --------------------------------------------

const { HOSTNAME, PORT } = env;

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
app.use('/', apiRoutesV1);


// --------------------------------------------
// Server
// --------------------------------------------
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
})