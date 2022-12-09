import bookstore from '../models/book.model';

export const getAllBooks = async () => {
    const data = await bookstore.find();
    return data;
  };
  export const getBook = async (id) => {
    const data = await bookstore.findById(id);
    return data;
  };
  