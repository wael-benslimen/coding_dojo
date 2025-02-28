import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ page, setPage }) => {
  return (
    <div className="flex p-1 border rounded-lg justify-around">
      <Link
        to={"/"}
        className={` ${
          page === "Home" ? "bg-blue-100" : "bg-white"
        }  px-3 py-2 rounded-md`}
        onClick={() => setPage("Home")}
      >
        Home
      </Link>
      <Link
        to={"/create"}
        className={` ${
          page === "Create" ? "bg-blue-100" : "bg-white"
        }  px-3 py-2 rounded-md`}
        onClick={() => setPage("Create")}
      >
        Create Post
      </Link>
    </div>
  );
};

export default Navbar;
