import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import * as BookController from '../controllers/book.controller'

const router = express.Router();

router.get('', userAuth, BookController.getAllBooks);
router.get('/:_id',userAuth, BookController.getBook);

export default router;