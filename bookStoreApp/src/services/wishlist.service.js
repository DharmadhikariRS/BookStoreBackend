import Cart from '../models/cart.model';
import bookstore from '../models/book.model';
import wishlist from '../models/wishlist.model';
import { books } from 'googleapis/build/src/apis/books';

export const createWishlist = async (body, id) => {
  const bookDetails = await bookstore.findById({_id: id});
  
//   console.log("book details ",bookDetails);
  const data = await wishlist.findOne({ userId: body.userId });
   if (data === null) {
    console.log("inside first if");
    const booksArray = [];
    booksArray.push(bookDetails);
    console.log("BooksArray== ",booksArray);
    body.books = booksArray;
    const userData = await wishlist.create(body);
    return body;
  } else {
    let isExist = data.books.find(
        (book) => book._id.toString() === id.toString()
      );
    // console.log('bookFound=', isExist);
    if (isExist) {
      throw new Error("Book already exist");
    } else {
      console.log('inside outer else');
      data.books.push(bookDetails);
      data.save();
      return data;
    }
  }

};

export const removeFromWishlist = async (body, id) => {
  const data = await wishlist.findOne({ userId: body.userId });

    // data.books = data.books.filter(
    //   (book) => book._id.toString() === id.toString()
    // );

    data.books.find((book) => book._id.toString() === id.toString()).remove();
    data.save();
    return data;
  
};
