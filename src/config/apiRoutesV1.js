import { Router } from "express";
import sensorDataRoutesV1 from '../modules/sensorData/sensorDataRoutes.js';

const router = Router();

router.use('/sensor-data', sensorDataRoutesV1);

export default router;