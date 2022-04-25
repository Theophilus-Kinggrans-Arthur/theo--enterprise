import React from "react";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">WELCOME TO THE TECHLAB</span>
      <div className={`nav-items ${isOpen && "Open"}`}>
        <a href="/home">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/service">SERVICE</a>
        <a href="/contact">CONTACT</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "Open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
