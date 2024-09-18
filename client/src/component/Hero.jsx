import React from "react";
import "../css/hero.css";
import earth from "../images/globe.png";
export default function Hero() {
  return (
    <div className="hero-sec">
      <div className="hero-company-intro">
        <p className="hero-intro-title">Bridging Hunger and Hope</p>
        <p className="hero-intro-desc">
          Utilize surplus food from restaurants to provide meals for individuals
          in need. Minimize food waste by efficiently redistributing surplus
          food items.
        </p>
        <div className="hero-intro-btn">
          <a href="">
            <p className="explore-btn">Explore Meals</p>
          </a>
          <a href="">
            {" "}
            <p className="account-btn">Create Account</p>
          </a>
        </div>
      </div>
      <img className="hero-globe-img animate-bounce" src={earth} alt="" />
    </div>
  );
}
