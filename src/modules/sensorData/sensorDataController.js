import { MongooseError } from "mongoose";
import sensorDataService from "./sensorDataService.js";

// -------------------------------------------------------------------------- //
// Requests
// -------------------------------------------------------------------------- //

const sensorDataController = {}


// GET
sensorDataController.read = async (req, res) => {
    
    const doc = await sensorDataService.read();

    if(!doc) {
        return res.status(404).json({ msg: "No registries found." });
    }

    res.status(200).json(doc);

    // TODO try-catch
}


// GET :id
sensorDataController.readById = async (req, res) => {

    const { id } = req.params;

    try {
        const doc = await sensorDataService.readById(id);

        if(!doc) {
            return res.status(404).json({ msg: "No registries found." });
        }
    
        res.status(200).json(doc)

    } catch (error) {

        if(error instanceof MongooseError) {
            res.status(422).json({ msg: "Invalid ID." });
            return;
        }
        res.status(400).json({ msg: "Invalid request." });
        return;
    }
}


// POST
sensorDataController.create = async (req, res) => {
    const { 
        rpm_engine_1,
        rpm_engine_2,
        volume,
        flowRate,
        temperature
     } = req.body;

     if(!rpm_engine_1) {
        res.status(422).json({msg: "The rpm_engine_1 is required!"});
        return;
     }
     if(!rpm_engine_2) {
        res.status(422).json({msg: "The rpm_engine_2 is required!"});
        return;
     }
     if(!volume) {
        res.status(422).json({msg: "The volume is required!"});
        return;
     }
     if(!flowRate) {
        res.status(422).json({msg: "The flowRate is required!"});
        return;
     }
     if(!temperature) {
        res.status(422).json({msg: "The temperature is required!"});
        return;
     }

    const data = { 
        rpm_engine_1,
        rpm_engine_2,
        volume,
        flowRate,
        temperature
     };

    try {

        const doc = await sensorDataService.create(data);
        res.status(201).json(doc);

    } catch (error) {
        res.status(500).json({ msg: "Unable to create document." })
    }
}


// --------------------------------------------
// Exports
// --------------------------------------------
export default sensorDataController;