import HttpStatus from 'http-status-codes';
import * as wishlistservice from '../services/wishlist.service'

 export const createWishlist = async (req, res, next) => {
    try {
      const data = await wishlistservice.createWishlist(req.body,req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book added to wishlist successfully'
      });
    } catch (error) {
        // error.message="Book already exist in cart"
        res.status(HttpStatus.BAD_REQUEST).json({
          code: HttpStatus.BAD_REQUEST,
          message: `${error}`
        });
    }
  };

  
 export const removeFromWishlist = async (req, res, next) => {
  try {
    const data = await wishlistservice.removeFromWishlist(req.body,req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book removed from wishlist successfully'
    });
  } catch (error) {    
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};