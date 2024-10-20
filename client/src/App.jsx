import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Usage from "./component/Usage";
import Solution from "./component/Solution";
import Achievement from "./component/Achievement";
import Caraousel from "./component/Caraousel";
import Footer from "./component/Footer";
import BusinessRegistration from "./component/BusinessRegistration";
import FoodRegistration from "./component/FoodRegistration";

// import Carousel from "./component/Carousel";
import "./index.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Usage />
      <Caraousel />
      <Solution />
      <Achievement />
      <Footer />
    </div>
  );
}
