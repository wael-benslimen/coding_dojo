import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ title, setTitle }) {
  const navigate = useNavigate();
  return (
    <div className=" navbar">
      <h1> {title} </h1>
      <button
        className=" btn btn-success"
        onClick={() => navigate("/contact/new")}
      >
        {" "}
        Create
      </button>
      <button className=" btn btn-primary" onClick={() => navigate("/")}>
        {" "}
        Home
      </button>
    </div>
  );
}

export default Navbar;
