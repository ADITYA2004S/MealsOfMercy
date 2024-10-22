import React, { useState } from "react";

const FoodSuccess = () => {
  const [fadingEffects, setFadingEffects] = useState([]);

  const handleMouseMove = (e) => {
    const newEffect = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(), // Unique ID for each effect
    };

    setFadingEffects((prev) => [...prev, newEffect]);

    // Remove the effect after a short duration (500ms)
    setTimeout(() => {
      setFadingEffects((prev) =>
        prev.filter((effect) => effect.id !== newEffect.id)
      );
    }, 500); // Adjust time to how long the fading lasts
  };

  // Dummy data
  const foodName = "Delicious Pasta";
  const foodDescription =
    "A delightful blend of pasta with fresh herbs and tomatoes.";
  const foodImage = "https://via.placeholder.com/150"; // Placeholder image URL

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4"
      onMouseMove={handleMouseMove}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center relative overflow-hidden">
        {/* Main Content */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">
          🎉 Success!
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          Your food item has been added successfully to your cart.
        </p>

        {/* Food Image, Name, and Description */}
        <div className="flex items-center mb-4">
          <img
            src={foodImage}
            alt={foodName}
            className="w-32 h-32 object-cover rounded-lg mr-4" // Adjust size of image
          />
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {foodName}
            </h3>
            <p className="text-gray-600">{foodDescription}</p>
          </div>
        </div>

        <button className="bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:bg-green-500">
          Continue Shopping
        </button>

        {/* Fading Effect */}
        {fadingEffects.map((effect) => (
          <div
            key={effect.id}
            className="absolute rounded-full bg-blue-200"
            style={{
              width: "50px", // Adjust size of fading circles
              height: "50px",
              left: effect.x - 25, // Center the circle at the cursor
              top: effect.y - 25,
              opacity: 0.75,
              pointerEvents: "none", // Prevent hover events
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodSuccess;
