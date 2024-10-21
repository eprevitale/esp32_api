import { Router } from "express";
import sensorDataController from './sensorDataController.js';

const router = Router();


// ----------------------------------------------------------------------- //
// Routes
// ----------------------------------------------------------------------- //

router.get('/', sensorDataController.read);

router.get('/:id', sensorDataController.readById);

router.post('/', sensorDataController.create);



export default router;