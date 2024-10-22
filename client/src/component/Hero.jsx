import React from "react";
import "../css/hero.css";

import earth from "../images/globe.png";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="hero-sec">
      <div className="hero-company-intro">
        <p className="hero-intro-title ">Bridging Hunger and Hope</p>
        <p className="hero-intro-desc">
          Utilize surplus food from restaurants to provide meals for individuals
          in need. Minimize food waste by efficiently redistributing surplus
          food items.
        </p>

        <div className="hero-intro-btn">
          <a href="">
            <p className="explore-btn">Explore Meals</p>
          </a>
          <Link href="/user/register">
            {" "}
            <p className="account-btn">Create Account</p>
          </Link>
        </div>
      </div>
      <img className="hero-globe-img " src={earth} alt="" />
    </div>
  );
}
