import sensorDataService from "./sensorDataService.js";

// -------------------------------------------------------------------------- //
// Requests
// -------------------------------------------------------------------------- //

// GET
const getAllSensorData = async(req, res) => {
    // req
    const body = req.body;
    if(body) {
        console.log(body);
    }
    console.log("received a GET!")

    // res
    const json = JSON.stringify({
        'received': true,
        'hello': 'world'
    });
    res.status(200).send(json);
}


// POST
const postSensorData = async(req, res) => {
    const { 
        timestamp,
        sensorId,
        temperature,
        level,
        flowRate,
        volume
     } = req.body;
    if(!timestamp || !sensorId || !temperature || !level || !flowRate || !volume) {
        var resStatus = 400;
        var json = { "message": "Insufficient parameters in the body. Please review the request." };
    } else {
        const data = req.body;
        const doc = await sensorDataService.create(data);
        var resStatus = 201;
        var json = doc;
        console.log(resStatus, json);
    }
    res.status(resStatus).send(json);
}


// --------------------------------------------
// Exports
// --------------------------------------------
export default {
    getAllSensorData,
    postSensorData
}