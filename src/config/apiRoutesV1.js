import { Router } from "express";
import sensorDataRoutes from '../modules/sensorData/sensorDataRoutes.js';
import userRoutes from '../modules/user/userRoutes.js';

const router = Router();


// ----------------------------------------------------------------------- //
// Routes
// ----------------------------------------------------------------------- //

router.use('/sensor-data', sensorDataRoutes);
router.use('/users', userRoutes);



export default router;