import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllPosts from "./views/AllPosts";
import EditPost from "./views/EditPost";
import CreatePost from "./views/CreatePost";
const App = () => {
  const [page, setPage] = useState("Home");
  return (
    <div className="p-5">
      <Router>
        <Navbar page={page} setPage={setPage} />
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/update/:id" />
          <Route path="/view/id" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
