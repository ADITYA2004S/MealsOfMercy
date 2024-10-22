import { useState, useEffect } from "react";
import axios from "axios";

import useRestaurant from "../hooks/useRestaurant";

export default function AddItemSuccess() {
  const [item, setItem] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const { restaurantID } = useRestaurant();

  useEffect(() => {
    const fetchFoodItem = async () => {
      try {
        const response = await axios.get(
          `/api/restaurant/${restaurantID}/item`
        );

        console.log(response.data);

        setItem(response.data[0]);
      } catch (error) {
        console.error("Error fetching food item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItem();
  }, [restaurantID]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-bounce">
          🎉 Success!
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          Food Item Successfully Added
        </p>

        <div className="flex items-center mb-4">
          <img
            src={item?.image || ""}
            alt={item?.name}
            className="w-32 h-32 object-cover rounded-lg mr-4"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {item?.name}
            </h3>
            <p className="text-gray-600">{item?.description}</p>
          </div>
        </div>

        <button className="bg-green text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:bg-green-500">
          Done
        </button>
      </div>
    </div>
  );
}
