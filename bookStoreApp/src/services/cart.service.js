import Cart from '../models/cart.model';
import bookstore from '../models/book.model';
import { books } from 'googleapis/build/src/apis/books';

export const createCart = async (body, id) => {
  const bookDetails = await bookstore.findById({ _id: id });
  const data = await Cart.findOne({ userId: body.userId });

  if (data === null) {
    bookDetails.quantity = 1;
    const booksArray = [];
    booksArray.push(bookDetails);
    body.books = booksArray;
    body.cart_total = bookDetails.price;
    const userData = await Cart.create(body);
    return body;
  } else {
    let isExist = data.books.find(
      (book) => book._id.toString() === id.toString()
    );
    console.log('bookFound=', isExist);
    if (isExist) {
      data.books.find(
        (book) => book._id.toString() === id.toString()
      ).quantity = isExist.quantity + 1;
      data.cart_total = data.cart_total + bookDetails.price;
      await Cart.findOneAndUpdate(
        { userId: body.userId },
        { books: data.books, cart_total: data.cart_total }
      );
      //  data.save();
      return data;
    } else {
      bookDetails.quantity = 1;
      console.log('inside outer else');
      data.cart_total = data.cart_total + bookDetails.price;
      data.books.push(bookDetails);
      data.save();
      return data;
    }
  }
};

export const removeFromCart = async (body, id) => {
  const bookDetails = await bookstore.findById({ _id: id });
  const data = await Cart.findOne({ userId: body.userId });
  console.log('bookFound=', isExist);
  let isExist = data.books.find(
    (book) => book._id.toString() === id.toString()
  );
  if (isExist.quantity >= 2) {
    data.books.find((book) => book._id.toString() === id.toString()).quantity =
      isExist.quantity - 1;
    data.cart_total = data.cart_total - bookDetails.price;
    await Cart.findOneAndUpdate(
      { userId: body.userId },
      { books: data.books, cart_total: data.cart_total }
    );
    return data;
  } else {
    data.books.find((book) => book._id.toString() === id.toString()).remove();
    data.cart_total = data.cart_total - bookDetails.price;
    data.save();
    return data;
  }
};

export const Purchase = async (body, id) => {
  const data = await Cart.findById({ _id: id });
  if (data === null) {
    throw new Error('Cart not found');
  } else {
    if (data.books.length === 0) {
      throw new Error('Cart is empty');
    } else {
      data.isPurchased = true;
      data.save();
      return data;
    }
  }
};
