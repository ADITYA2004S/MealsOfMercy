import { Link } from "react-router-dom";

import logo from "../images/company-logo.png";

import "../css/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-sec">
      <div className="nav-company">
        <img className="nav-company-logo" src={logo} alt="" />
        <p className="nav-company-title">Seva Meals</p>
      </div>

      <div className="nav-list">
        <li>About</li>

        <Link to={"/restaurant/register"}>
          <li>Business</li>
        </Link>

        <li>
          {" "}
          <span className="bg-black bg-opacity-20 p-2 ">Food Waste</span>
        </li>
      </div>
    </div>
  );
}
