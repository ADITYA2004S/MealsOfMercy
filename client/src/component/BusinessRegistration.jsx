import React from "react";
import image from "../images/hotellogin.png";
import logo from "../images/company-logo.png";

function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6 md:mb-0 md:mr-10 w-64 h-64">
          <img
            src={image}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full max-w-sm">
          <div className="text-center mb-6">
            <img
              src={logo}
              alt="Seva Meal Logo"
              className="w-12 mx-auto mb-2"
            />
            <h2 className="text-3xl font-semibold text-gray-800">Seva Meal</h2>
            <p className="text-xl text-gray-600 mt-2">Sign Up</p>
          </div>
          <form className="space-y-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Hotel Details
              </h3>
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 px-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="hotelName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="hotelName"
                      className="absolute left-4 top-2 text-gray-500 transition-all peer-focus:text-xs peer-focus:top-[-8px] peer-focus:left-2 peer-focus:text-green-500"
                    >
                      Hotel Name
                    </label>
                  </div>
                </div>
                <div className="w-1/2 px-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="hotelAddress"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="hotelAddress"
                      className="absolute left-4 top-2 text-gray-500 transition-all peer-focus:text-xs peer-focus:top-[-8px] peer-focus:left-2 peer-focus:text-green-500"
                    >
                      Hotel Address
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Manager Details
              </h3>
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 px-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="managerName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="managerName"
                      className="absolute left-4 top-2 text-gray-500 transition-all peer-focus:text-xs peer-focus:top-[-8px] peer-focus:left-2 peer-focus:text-green-500"
                    >
                      Manager Name
                    </label>
                  </div>
                </div>
                <div className="w-1/2 px-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="phoneNumber"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="phoneNumber"
                      className="absolute left-4 top-2 text-gray-500 transition-all peer-focus:text-xs peer-focus:top-[-8px] peer-focus:left-2 peer-focus:text-green-500"
                    >
                      Phone Number
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-all peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 top-2 text-gray-500 transition-all peer-focus:text-xs peer-focus:top-[-8px] peer-focus:left-2 peer-focus:text-green-500"
                >
                  Password
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green text-white py-2 rounded-lg hover:bg-green-800 focus:outline-none"
            >
              Get started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
