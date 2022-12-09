import HttpStatus from 'http-status-codes';
import * as bookservice from '../services/book.service';

export const getAllBooks = async (req, res, next) => {
    try {
      const data = await bookservice.getAllBooks();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All Books fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  export const getBook = async (req, res, next) => {
    try {
      const data = await bookservice.getBook(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

 

