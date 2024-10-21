import { Router } from "express";
import userController from './userController.js';

const router = Router();


// ----------------------------------------------------------------------- //
// Routes
// ----------------------------------------------------------------------- //

router.post('/', userController.create);

router.get('/', userController.read);

router.get('/:id', userController.readById);

router.patch('/:id', userController.update);

router.delete('/:id', userController.delete);


export default router;