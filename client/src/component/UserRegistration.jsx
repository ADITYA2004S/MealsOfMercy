import React from "react";
import image from "../images/userlogin.png";

export default function UserRegistration() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-800">
      <div className="bg-white rounded-lg shadow-lg flex">
        {/* Left side with image */}
        <div className="w-1/2 h-full p-0 bg-green-700 rounded-l-lg flex justify-center items-center">
          <div className="w-full h-full">
            <img
              src={image}
              alt="Food sharing illustration"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-green-900 mb-6">Seva Meal</h2>
          <h3 className="text-xl font-semibold text-green-700 mb-4">Sign Up</h3>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 bg-light-green-700 rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
