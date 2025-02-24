import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookCatalog from "./components/BookCatalog";
import OneBook from "./components/OneBook";
import CreateBook from "./components/CreateBook";
import NavBar from "./components/NavBar";
import { useState } from "react";
import EditBook from "./components/EditBook";

function App() {
  const [page, setPage] = useState("Book Catalog");
  return (
    <>
      <Router>
        <NavBar page={page} pageSetter={setPage} />
        <Routes>
          <Route
            path="/"
            element={<BookCatalog page={page} pageSetter={setPage} />}
          />
          <Route path="/books/:id" element={<OneBook />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
