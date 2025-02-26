import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    description: "",
  });
    const [errors, setErrors] = useState([])
    const handleValidations = () => {
        if (formInfo.title == "") {
            errors.push({title:'title is req'})
        }
    }
    const handleSubmit = async(e) => {
        e.preventDefault
        try {
            await axios.post("http://localhost:3000/api/",formInfo);
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
      <form className=" container mx-auto flex flex-col justify-around h-100 w-300 mt-5 px-5 border">
        <div className=" flex gap-5 items-center">
          <labe> Post title :</labe>
          <input
            type="text"
            className=" border w-100 p-1 text-black bg-white"
          />
        </div>
        <div className=" flex gap-5">
          <labe> Post description :</labe>
          <textarea
            type="text"
            className=" border w-100 p-1 text-black bg-white"
          ></textarea>
        </div>
        <button className=" text-green-500 border p-1 self-end">save</button>
      </form>
    </div>
  );
};

export default CreatePost;
