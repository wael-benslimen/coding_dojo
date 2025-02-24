import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [formInput, setFromInput] = useState({});
  const [title, setTitle] = useState("");
  const [author, setauthor] = useState("");
  const [pages, setPages] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFromInput({ title, author, pages, isAvailable });
    console.log(formInput);
    console.log(title);

    try {
      await axios.post("http://localhost:3000/books", {
        title,
        author,
        pages,
        isAvailable,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your title
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="author name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your author name
          </label>
          <input
            type="author name"
            id="author name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="author name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            page count
          </label>
          <input
            type="number"
            id="author name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <input
            type="checkbox"
            onChange={(e) => setIsAvailable(e.target.checked)}
          />
          <label htmlFor="checkbox"> is the book availble</label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
