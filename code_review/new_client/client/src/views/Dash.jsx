import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
function Dash() {
  const [contacts, setContacts] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    
    axios
      .delete("http://localhost:8000/api/contacts/" + id)
      .then((res) => setContacts(contacts.filter((c) => c._id != id)))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar title="contacts app" />
      {/* {JSON.stringify(contacts)} */}
      <table className=" table table-stiped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phoen number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td> {c.name} </td>
              <td> {c.phoneNumber} </td>
              <td className=" d-flex">
                {" "}
                <button>View</button>
                <button onClick={() => nav(`/contact/${c._id}/update`)}>
                  Update
                </button>
                <button onClick={()=>handleDelete(c._id)}>Delete</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dash;
