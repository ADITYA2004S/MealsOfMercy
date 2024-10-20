import React from "react";
import "../css/usage.css";
import logo from "../images/company-logo.png";
import leaf from "../images/leaf.png";
import plate from "../images/food-plate.png";
import hand from "../images/food-hand.png";
import clock from "../images/clock.png";
import earth from "../images/earth.png";
import wallet from "../images/wallet.png";
const usgaedetails = [
  {
    img: plate,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: leaf,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: hand,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: clock,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: earth,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: wallet,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
];
export default function Usage() {
  return (
    <div className="usage-">
      <p className="usage-title text-shadow-lg">
        Why Use <span className="usage-title-2 animate-bounce">SevaMeals?</span>
      </p>
      <UsageDetails details={usgaedetails} />
    </div>
  );
}

function UsageDetails({ details }) {
  return (
    <div className="usgae-details  ">
      {details.map((info) => (
        <div className="bg-white/75 p-4 rounded-lg border-2 border-gray  hover:shadow-lg transition-shadow duration-200 ease-in-out ">
          <img className="w-20 mx-auto" src={info.img} alt="" />
          <p className="text-xl  w-60 pt-4 text-green font-semibold font-Poppins">
            {info.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
