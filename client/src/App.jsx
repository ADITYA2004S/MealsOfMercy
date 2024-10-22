import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Usage from "./component/Usage";
import Solution from "./component/Solution";
import Achievement from "./component/Achievement";
import Caraousel from "./component/Caraousel";
import Footer from "./component/Footer";
import HotelListing from "./component/HotelListing";
import FoodRegistration from "./component/FoodRegistration";
import UserRegistration from "./component/UserRegistration";
import BusinessRegistration from "./component/BusinessRegistration";
import FoodListing from "./component/FoodListing";
import FoodSuccess from "./component/FoodSuccess";
import ManagerDashboard from "./component/ManagerDashboard";
import Ticket from "./component/Ticket";
import BookingError from "./component/BookingError";

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
      <FoodRegistration />
      <UserRegistration />
      <BusinessRegistration />
      <HotelListing />
      <FoodListing />

      <FoodSuccess />
      <ManagerDashboard />
      <Ticket />
      <BookingError />
    </div>
  );
}
