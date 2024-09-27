import React from "react";
import logo from "../images/company-logo.png";
import mail from "../images/mail-logo.png";
import phone from "../images/phone-logo.png";

export default function Footer() {
  return (
    <div className="footer-sec bg-green  mt-20 drop-shadow-2xl pb-20">
      <div className=" bg-[#004848] flex text-center p-5 space-x-2">
        <img className="w-10" src={logo} alt="" />
        <p className="text-3xl font-thin text-white"> Seva Meal</p>
      </div>

      <div className="grid grid-cols-2  pt-8 pb-6">
        <div className="pl-8 list-none font-thin">
          <p className="text-white text-2xl pb-3 font-thin">Contact Us</p>
          <div className="flex text-center space-x-4 pb-2">
            <img className="w-6 h-4" src={mail} alt="" />
            <li className="text-white text-xlg pb-2">123@gmail.com</li>
          </div>
          <div className="flex text-center space-x-4">
            <img className="w-5 h-4" src={phone} alt="" />
            <li className="text-white text-lg pb-2">12345678910</li>
          </div>
        </div>
        <div>
          <p className="">Follow Us</p>
        </div>
      </div>
    </div>
  );
}
