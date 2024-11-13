import { Router } from "express";
import authController from "./authController.js";

const router = Router();

router.post('/', authController.post);

export default router;