import { Router } from "express";
import userController from './userController.js';
import authMiddleware from "../auth/authMiddleware.js";

const router = Router();


// ----------------------------------------------------------------------- //
// Routes
// ----------------------------------------------------------------------- //

router.post('/', userController.create);

router.get('/', userController.read);

router.get('/:id', authMiddleware.isUserAuthenticated, userController.readById);

router.patch('/:id', userController.update);

router.delete('/:id', userController.delete);


export default router;