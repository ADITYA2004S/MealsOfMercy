import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Usage from "./component/Usage";
import "./index.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Usage />
    </div>
  );
}
