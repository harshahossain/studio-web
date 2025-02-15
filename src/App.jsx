import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//I could posibblu use the browserRouter to wrap around the nav and not use browser router on main.jsx at all but I need to know why
import "./App.css";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
