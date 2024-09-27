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
    const { h, i, t, l, f, v } = req.body; // timestamp, sensorID, temperature, level, flow rate, volume
    if(!h || !i || !t || !l || !f || !v) {
        var resStatus = 400;
        var json = { "message": "Insuficient parameters in the body. Please review the request." };
    } else {
        var resStatus = 201;
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