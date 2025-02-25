import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [formInput, setFromInput] = useState({
    title: "",
    author: "",
    pages: "",
    isAvailable: false,
  });
  const [errors, setErrors] = useState({});
  const [isvalid, setIsValid] = useState(true);
  const { id } = useParams();
  let navigate = useNavigate();

  const handleTitle = (e) => {
    if (e.target.value.length < 2 || e.target.value.length > 255) {
      errors.title =
        "Book title must be at least 2 characters long and less than 255 characters long!";
      setIsValid(false);
      setErrors(errors);
    } else {
      errors.title = "";
      setErrors(errors);
      setIsValid(true);
    }
    setFromInput({ ...formInput, title: e.target.value });
  };
  const handleAuthor = (e) => {
    if (e.target.value.length < 5 || e.target.value.length > 255) {
      errors.author =
        "Book author must be at least 2 characters long and less than 255 characters long!";
      setErrors(errors);
      setIsValid(false);
    } else {
      errors.author = "";
      setErrors(errors);
      setIsValid(true);
    }
    setFromInput({ ...formInput, author: e.target.value });
  };
  const handlePages = (e) => {
    if (e.target.value < 1) {
      errors.pages = "Book pages must be at least 1!";
      setErrors(errors);
      setIsValid(false);
    } else {
      errors.pages = "";
      setErrors(errors);
      setIsValid(true);
    }
    setFromInput({ ...formInput, pages: e.target.value });
  };

  // const validations = () => {
  //   const errors = {};
  //   let valid = true;

  //   if (title.length < 2 || title.length > 255) {
  //     errors.title =
  //       "Book title must be at least 2 characters long and less than 255 characters long!";
  //     valid = false;
  //   }
  //   if (author.length < 2 || author.length > 255) {
  //     errors.author =
  //       "Book author must be at least 2 characters long and less than 255 characters long!";
  //     valid = false;
  //   }
  //   if (pages < 1) {
  //     errors.pages = "Book pages must be at least 1!";
  //     valid = false;
  //   }

  //   setErrors(errors);
  //   return valid;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      await axios.put(`http://localhost:3000/books/${id}`, formInput);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const getOne = async () => {
    try {
      const oneobj = (await axios.get(`http://localhost:3000/books/${id}`))
        .data;
      setFromInput({ ...oneobj });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOne();
  }, []);

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your title
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formInput.title}
            onChange={handleTitle}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your author name
          </label>
          <input
            type="text"
            id="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formInput.author}
            onChange={handleAuthor}
          />
          {errors.author && <p className="text-red-500">{errors.author}</p>}
        </div>
        <div className="mb-5">
          <label
            htmlFor="pages"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Page count
          </label>
          <input
            type="number"
            id="pages"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formInput.pages}
            onChange={handlePages}
          />
          {errors.pages && <p className="text-red-500">{errors.pages}</p>}
        </div>
        <div className="mb-5">
          <input
            type="checkbox"
            checked={formInput.isAvailable}
            onChange={(e) =>
              setFromInput({ ...formInput, isAvailable: e.target.checked })
            }
          />
          <label htmlFor="checkbox"> Is the book available?</label>
        </div>
        {!isvalid ||
        errors.title != "" ||
        errors.author == "" ||
        errors.pages == "" ? (
          <button
            type="submit"
            disabled
            className="text-white bg-gray-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        ) : (
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default EditBook;
