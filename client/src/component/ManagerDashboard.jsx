import React from "react";
import "../index.css";

const boxes = [
  {
    title: "Track Food Status",
    image: "https://via.placeholder.com/100?text=Track", // Placeholder image URL
  },
  {
    title: "Add New Food Items",
    image: "https://via.placeholder.com/100?text=Add", // Placeholder image URL
  },
  {
    title: "Edit Hotel Details",
    image: "https://via.placeholder.com/100?text=Edit", // Placeholder image URL
  },
];

export default function ManagerDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <img src={box.image} alt={box.title} className="w-16 h-16 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {box.title}
            </h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-green-600">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
