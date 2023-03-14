import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={require("../../assets/logo.png")} alt="" />
      </div>
      <div className="links">
        <a href="#">Helyi for Franchise</a>
        <a href="#">Helyi for Partner</a>
        <a href="#">Helyi for Merchant</a>
        <a href="#">Helyi SMART</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="buttons">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
