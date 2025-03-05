import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    description: "",
    reviwes: [],
  });
  const [backvalid, setBackvalid] = useState({});
  const { id } = useParams();
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/${id}`, formInfo);
      nav("/");
    } catch (error) {
      console.log(error);

      setBackvalid(error.response.data.errors);
      console.log(error.response.data.errors);
    }
  };
  const getOne = async () => {
    try {
      const oneObj = await axios.get(`http://localhost:3000/api/${id}`);
      setFormInfo(oneObj.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOne();
  }, []);
  return (
    <div>
      <p className=" text-center font-semibold mt-5">
        {" "}
        reviwes : {formInfo.reviwes.length}
      </p>
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
          {/* {backvalid.title && <div> {backvalid.title.message} </div>} */}
        </div>
        <div className=" flex gap-5">
          <label> Post description :</label>
          <textarea
            className=" border w-100 p-1 text-black bg-white"
            onChange={(e) =>
              setFormInfo({ ...formInfo, description: e.target.value })
            }
            value={formInfo.description}
          ></textarea>
          {/* {backvalid.description && (
            <div> {backvalid.description.message} </div>
          )} */}
        </div>
        <div className=" flex gap-5">
          <label> Post reviwes :</label>
          <textarea
            className=" border w-100 p-1 text-black bg-white"
            onChange={(e) =>
              setFormInfo({ ...formInfo, reviwes: e.target.value })
            }
            value={formInfo.reviwes}
          ></textarea>
          {/* {backvalid.description && (
            <div> {backvalid.description.message} </div>
          )} */}
        </div>
        <button className=" text-green-500 border p-1 self-end">save</button>
      </form>
    </div>
  );
};

export default EditPost;
