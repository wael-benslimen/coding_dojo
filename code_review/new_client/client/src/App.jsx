import { useState } from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from "./views/Create"
import Dash from "./views/Dash"
import Update from "./views/Update"
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element ={<Dash/>} />
            <Route path="/contact/new" element ={<Create/>} />
            <Route path="/contact/:id/update" element ={<Update/>} />
          </Routes>
        </Router>      
      </div>
      
    </>
  )
}

export default App
