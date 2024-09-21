import express from 'express';
import bodyParser from 'body-parser';

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Import routes


// Set routes


// Server start
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})