import { model, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "book title is required!"],
      minlength: [2, "book title must be at least 2 characters long!"],
      maxlength: [255, "book title must be less than 255 characters long"],
    },
    author: {
      type: String,
      required: [true, "author name is required!"],
      minlength: [5, "author name should be at least 5 letters"],
      maxlength: [255, "author name should be less than 255 letters"],
    },
    pages: {
      type: Number,
      required: [true, "num of pages is required"],
      min: [1, "num of pages should be at least 1"],
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Book = model("Book", bookSchema);
export default Book;
