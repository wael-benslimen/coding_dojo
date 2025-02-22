import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const OneBook = () => {
  const [oneBook, setOneBook] = useState({});
  const { id } = useParams()
  let Navigate = useNavigate()
  
  const getBook = async () => {
    try {
      const obj = await axios.get(`http://localhost:3000/books/${id}`);
      console.log(obj.data);
      setOneBook(obj.data)
      
      
    } catch (error) {
      console.log(error);
    }
  };
  const deleteBook = async (e) => {
    await axios.delete(`http://localhost:3000/books/${id}`);
    Navigate('/')
  }
  useEffect(() => {
    getBook()
  },[])
  return (
    <div className=" flex flex-col items-center min-w-dvw min-h-dvh bg-blue-50">
      <div className=" text-center bg-blue-100 p-5 flex flex-col gap-5 w-60 border rounded-2xl mt-5">
        <h1 className=" text-2xl font-semibold"> {oneBook.title} </h1>
        <p> {oneBook.author} </p>
        <p> {oneBook.pages} </p>
        <p> {oneBook.isAvailable ? 'available' : 'unavailable'} </p>
        {oneBook.isAvailable? <button className=" bg-orange-500 rounded-lg w-20 self-center text-white p-1 cursor-pointer" onClick={deleteBook}>borrow</button>:null}
      </div>
    </div>
  );
};

export default OneBook;
