import React from "react";
import "../css/navbar.css";
import logo from "../images/company-logo.png";
export default function Navbar() {
  return (
    <div className="navbar-sec">
      <div className="nav-company">
        <img className="nav-company-logo" src={logo} alt="" />
        <p className="nav-company-title">Seva Meals</p>
      </div>

      <div className="nav-list">
        <li>About</li>
        <a href="#business">
          {" "}
          <li>Business</li>
        </a>
        <li>
          {" "}
          <span className="bg-black bg-opacity-20 p-2 ">Food Waste</span>
        </li>
      </div>
    </div>
  );
}
