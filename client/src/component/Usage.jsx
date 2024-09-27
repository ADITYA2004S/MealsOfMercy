import React from "react";
import "../css/usage.css";
import logo from "../images/company-logo.png";
const usgaedetails = [
  {
    img: logo,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: logo,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: logo,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: logo,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: logo,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
  {
    img: logo,
    title: "title1",
    desc: "Help the environment by reducing food waste",
  },
];
export default function Usage() {
  return (
    <div className="usage-sec">
      <p className="usage-title text-shadow-lg">
        Why Use <span className="usage-title-2 animate-bounce">SevaMeals?</span>
      </p>
      <UsageDetails details={usgaedetails} />
    </div>
  );
}

function UsageDetails({ details }) {
  return (
    <div className="usgae-details ">
      {details.map((info) => (
        <div>
          <img src={info.img} alt="" />
          <p className="text-xl font-Poppins w-60 pt-4">{info.desc}</p>
        </div>
      ))}
    </div>
  );
}
