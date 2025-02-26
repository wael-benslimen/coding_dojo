import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  const getAll = async () => {
    try {
      const allPosts = await axios.get("http://localhost:3000/api/");
      setAllPosts(allPosts.data);
    } catch (error) {
      console.log(error);
    }
    };
    
    const dePosts = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/${id}`);
        } catch (error) {
            console.log(error);  
        }
    }
  useEffect(() => {
    getAll();
  }, [()=>dePosts]);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className=" w-full text-sm text-left rtl:text-right mt-5 border">
          <thead className="text-xs text-gray-700 uppercase border">
            <tr>
              <th scope="col" className="px-6 py-3 border">
                title
              </th>
              <th scope="col" className="px-6 py-3 border">
                reviews
              </th>
              <th scope="col" className="px-6 py-3 border">
                created at
              </th>
              <th scope="col" className="px-6 py-3 border">
                action
              </th>
            </tr>
          </thead>
          <tbody className=" border">
            {allPosts.map((p) => (
              <tr className="bg-white border border-black" key={p._id}>
                <th className="px-6 py-4 border"> {p.title} </th>
                <td className="px-6 py-4 border">{p.reviwes.length}</td>
                <td className="px-6 py-4 border">
                  {moment(p.createdAt).format("dddd, Do MMMM  YYYY")}
                </td>
                <td className="px-6 py-4 border">
                  {" "}
                  <Link
                    to={`/edit/${p._id}`}
                    className=" text-green-500 border p-1 rounded-lg"
                  >
                    edit
                  </Link>{" "}
                  <button className="text-red-500 p-1 border rounded-lg" onClick={()=>dePosts(p._id)}>
                    {" "}
                    delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPosts;
