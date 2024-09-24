import { Router } from "express";
import sensorDataController from './sensorDataController.js';

const router = Router();

router.get('', sensorDataController.getAllSensorData);

export default router;