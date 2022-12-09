import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import * as cartController from '../controllers/cart.controller';

const router = express.Router();
router.post('/:_id', userAuth, cartController.createCart);
router.post('/:_id/removeFromCart', userAuth, cartController.removeFromCart);
router.post('/:_id/purchase', userAuth, cartController.Purchase);
export default router;