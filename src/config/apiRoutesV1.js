import { Router } from "express";
import authRoutes from '../modules/auth/authRoutes.js';
import sensorDataRoutes from '../modules/sensorData/sensorDataRoutes.js';
import userRoutes from '../modules/user/userRoutes.js';

const router = Router();


// ----------------------------------------------------------------------- //
// Routes
// ----------------------------------------------------------------------- //

router.use('/auth', authRoutes);
router.use('/sensor-data', sensorDataRoutes);
router.use('/users', userRoutes);


export default router;