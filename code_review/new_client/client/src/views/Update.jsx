import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function Update({ title }) {
  const [contact, setContact] = useState({
    name: "",
    phoneNumber: "",
    birthdate: "",
    Active: true,
  });
  const {id} = useParams();
  const nav = useNavigate();
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setContact((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/contacts/", contact)
      .then((res) => nav("/"))
      .catch((err) => setErrors(err.responce.data.errors));
  };
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/contacts/" + id)
      .then((res) => setContact(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar title={`update ${contact.name}`} />
      <form onSubmit={handleSubmit}>
        <div className=" mb-3">
          <label className=" form-label">name</label>
          {errors.name && (
            <div className=" alert alert-warning"> {errors.name.message} </div>
          )}
          <input
            type="text"
            className=" from-control"
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
        </div>
        <div className=" mb-3">
          <label className=" form-label">phoneNumber</label>
          {errors.phoneNumber && (
            <div className=" alert alert-warning">
              {" "}
              {errors.phoneNumber.message}{" "}
            </div>
          )}
          <input
            type="text"
            className=" from-control"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className=" mb-3">
          <label className=" form-label">birthdate</label>
          {errors.birthdate && (
            <div className=" alert alert-warning">
              {" "}
              {errors.birthdate.message}{" "}
            </div>
          )}
          <input
            type="date"
            className=" from-control"
            name="birthdate"
            value={contact.birthdate}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="active"
            checked={contact.Active}
            onChange={handleChange}
          />
          <label htmlFor=""></label>
        </div>
        <button className=" btn btn-primary">submit</button>
      </form>
    </div>
  );
}

export default Update;
