import sensorDataService from "./sensorDataService.js";

// -------------------------------------------------------------------------- //
// Requests
// -------------------------------------------------------------------------- //

const sensorDataController = {}


// GET
sensorDataController.getAllSensorData = async (req, res) => {
    
    const doc = await sensorDataService.read();

    if(!doc) {
        res.status(404).json({ msg: "No registries found." });
        return;
    }

    res.status(200).json(doc);
}


// GET :id
sensorDataController.getSingleSensorData = async (req, res) => {

    const { id } = req.params;

    const doc = await sensorDataService.readById( id );

    if(!doc) {
        res.status(404).json({ msg: "No registries found." });
        return;
    }

    res.status(200).json(doc)
}


// POST
sensorDataController.postSensorData = async (req, res) => {
    const { 
        timestamp,
        sensorId,
        temperature,
        level,
        flowRate,
        volume
     } = req.body;

     if(!timestamp) {
        res.status(422).json({msg: "The timestamp is required!"});
        return;
     }
     if(!sensorId) {
        res.status(422).json({msg: "The sensorId is required!"});
        return;
     }
     if(!temperature) {
        res.status(422).json({msg: "The temperature is required!"});
        return;
     }
     if(!level) {
        res.status(422).json({msg: "The level is required!"});
        return;
     }
     if(!flowRate) {
        res.status(422).json({msg: "The flowRate is required!"});
        return;
     }
     if(!volume) {
        res.status(422).json({msg: "The volume is required!"});
        return;
     }

    const data = req.body;
    const doc = await sensorDataService.create(data);

    res.status(201).json({
        msg: "Object created successfully.",
        doc
    });
}


// --------------------------------------------
// Exports
// --------------------------------------------
export default sensorDataController;