import express from 'express';
import bodyParser from 'body-parser';
import env from './config.js';
import './config/db.js'

// --------------------------------------------
// Configs
// --------------------------------------------

const PORT = env.PORT || 3000;

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
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})


export default app;