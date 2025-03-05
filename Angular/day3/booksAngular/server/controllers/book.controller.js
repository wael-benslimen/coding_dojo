import Book from "../models/book.model.js";
import { handleError } from "../error.handler.js";

export const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    await newBook.i
    res.status(201).json({ mesaage: "user is created succesfuly", newBook });
  } catch (error) {
    res.status(500).json(handleError(error))
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    book
      ? res.status(200).json(book)
      : res.status(404).json({ message: "stop using the url !!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    updatedBook
      ? res.status(201).json(updatedBook)
      : res.status(404).json({ message: "stop using the url !!" });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const bookToDelete = await Book.findByIdAndDelete(req.params.id);
    bookToDelete
      ? res.status(201).json({ message: "Book deleted" })
      : res.status(404).json({ message: "stop using the url !!" });
  } catch (error) {
    res.status(500).json(error);
  }
};
