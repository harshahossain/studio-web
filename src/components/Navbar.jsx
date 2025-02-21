import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import "./navbar.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Studio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/" className="hover:text-blue-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/studio" className="hover:text-blue-400">
              Studio
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="hover:text-blue-400">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-blue-400">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-400">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 p-4 space-y-4 text-center">
          <li>
            <Link
              to="/"
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/studio"
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Studio
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

// need to start from here again and design
