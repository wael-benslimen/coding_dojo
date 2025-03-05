import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [backvalid, setBackvalid] = useState({});

  const handleValidations = () => {
    if (formInfo.title == "") {
      errors.push({ title: "title is req" });
    }
  };
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/", formInfo);
      nav("/");
    } catch (error) {
      console.log(error);

      setBackvalid(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  };
  return (
    <div>
      <form
        className=" container mx-auto flex flex-col justify-around h-100 w-300 mt-5 px-5 border"
        onSubmit={handleSubmit}
      >
        <div className=" flex gap-5 items-center">
          <label> Post title :</label>
          <input
            type="text"
            className=" border w-100 p-1 text-black bg-white"
            value={formInfo.title}
            onChange={(e) =>
              setFormInfo({ ...formInfo, title: e.target.value })
            }
          />
          {backvalid.title && <div> {backvalid.title.message} </div>}
        </div>
        <div className=" flex gap-5">
          <label> Post description :</label>
          <textarea
            className=" border w-100 p-1 text-black bg-white"
            onChange={(e) =>
              setFormInfo({ ...formInfo, description: e.target.value })
            }
            defaultValue={formInfo.description}
          />
            
          {backvalid.description && (
            <div> {backvalid.description.message} </div>
          )}
        </div>
        <button className=" text-green-500 border p-1 self-end">save</button>
      </form>
    </div>
  );
};

export default CreatePost;
