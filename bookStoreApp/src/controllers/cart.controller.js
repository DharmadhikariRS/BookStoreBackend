import HttpStatus from 'http-status-codes';
import * as cartservice from '../services/cart.service'

 export const createCart = async (req, res, next) => {
    try {
      const data = await cartservice.createCart(req.body,req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Bood added to cart successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      });
    }
  };

  
 export const removeFromCart = async (req, res, next) => {
  try {
    const data = await cartservice.removeFromCart(req.body,req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Bood removed from cart successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};

export const Purchase = async (req, res, next) => {
  try {
    const data = await cartservice.Purchase(req.body,req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Order placed successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
    // next(error);
  }
};
