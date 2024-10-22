import React from "react";
import image from "../images/food.png";

const foodItems = [
  {
    id: 1,
    name: "Pizza",
    description: "Delicious cheese pizza with a crispy crust.",
    image: image, // Dummy pizza image
  },
];

const FoodListing = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">Food Menu</h2>
          <p className="text-lg text-gray-600 mt-2">
            Select your favorite food
          </p>
        </div>
        <div className="space-y-4">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-48 h-48 object-cover rounded-lg mb-4" // Adjusted image size
              />
              <div className="flex flex-col w-full">
                <h4 className="text-lg font-medium text-gray-800 max-w-full w-fit m-auto text-left">
                  {item.name}
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg bg-green transition-all"
                onClick={() => onSelect(item)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodListing;
