import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const BookCatalog = ({ page, pageSetter }) => {
  const [allBooks, setAllBooks] = useState([]);
  const getAll = async () => {
    try {
      const Books = await axios.get("http://localhost:3000/books");
      setAllBooks(Books.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getAll, []);
  return (
    <div className=" container mx-auto ">
      <table className=" w-full text-md text-left mt-5 rounded-2xl bg-gray-200">
        <thead className=" border-b rounded-l-2xl-2xl">
          <tr>
            <th className=" px-6 py-3">Title</th>
            <th className=" px-6 py-3">Author</th>
            <th className=" px-6 py-3">Page count</th>
            <th className=" px-6 py-3">Available</th>
            <th className=" px-6 py-3">Book Details</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((b) => (
            <tr key={b._id} className=" border-b">
              <td className=" px-6 py-3"> {b.title} </td>
              <td className=" px-6 py-3"> {b.author} </td>
              <td className=" px-6 py-3"> {b.pages} </td>
              <td className=" px-6 py-3">
                {b.isAvailable ? "Available" : "Unavailable"}
              </td>
              <td className=" px-6 py-3">
                <Link
                  to={`/books/${b._id}`}
                  className=" bg-blue-500 p-1 rounded-lg border text-white border-black text-l"
                  onClick={() => pageSetter("Book details")}
                >
                  view details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookCatalog;
