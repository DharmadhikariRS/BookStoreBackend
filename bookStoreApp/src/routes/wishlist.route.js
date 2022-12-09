import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as wishlistControler from '../controllers/wishlist.controller';

const router = express.Router();
router.post('/:_id', userAuth, wishlistControler.createWishlist);
router.post('/:_id/removeFromWishlist', userAuth, wishlistControler.removeFromWishlist);
export default router;