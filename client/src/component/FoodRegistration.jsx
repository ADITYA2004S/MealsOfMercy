import React from "react";

export default function MenuDecision() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">Decide today’s Menu</h1>

      <div className="flex space-x-10">
        {/* Image Upload Section */}
        <div className="flex flex-col items-center">
          <div className="w-60 h-60 border-2 border-gray-400 flex items-center justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="w-40 h-40"
            />
          </div>
          <button className="mt-5 bg-green text-yellow-100 px-4 py-2 rounded-md font-semibold">
            Go Live
          </button>
        </div>

        {/* Input Form Section */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter Dish name"
            className="border-2 border-gray-400 p-3 rounded-full w-96"
          />
          <textarea
            placeholder="Enter Dish Description"
            className="border-2 border-gray-400 p-3 rounded-2xl w-96 h-32"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Timing"
              className="border-2 border-gray-400 p-3 rounded-full w-44"
            />
            <input
              type="text"
              placeholder="Quantity"
              className="border-2 border-gray-400 p-3 rounded-full w-44"
            />
          </div>
        </div>
      </div>

      <p className="mt-5 text-gray-500 cursor-pointer">Edit</p>
    </div>
  );
}
