import { Router } from "express";
import sensorDataController from './sensorDataController.js';

const router = Router();

router.get('/', sensorDataController.getAllSensorData);

router.get('/:id', sensorDataController.getSingleSensorData);

router.post('/', sensorDataController.postSensorData);

export default router;