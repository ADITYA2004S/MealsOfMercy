import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import useUser from "../hooks/useUser";

import LocationIcon from "../images/location.png";
import PopularIcon from "../images/popular.png";
import HotelIcon from "../images/hotel.png";

import Navbar from "../component/Navbar";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("/api/restaurant");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div id="business" className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold text-gray-800">
          Good Morning, {user.name}!
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          Let&apos;s explore today&apos;s menu
        </p>
      </div>

      <div className="flex justify-center relative mt-8 mb-8">
        <img
          className="w-[80rem] rounded-xl shadow-lg"
          src={PopularIcon}
          alt="Today's Popular"
        />
        <div className="absolute flex flex-col items-center justify-center text-center">
          <p className="font-bold text-4xl text-yellow-500">
            Today&apos;s Popular
          </p>
          <button className="bg-yellow-500 text-white font-semibold mt-2 px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
            See Now
          </button>
        </div>
      </div>

      <div className="px-10">
        {restaurants.length === 0 ? (
          <div className="text-center text-xl">Loading...</div>
        ) : (
          restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white shadow-md rounded-lg flex items-center space-x-4 p-5 mb-6"
            >
              <img
                className="w-40 h-40 object-cover rounded-lg shadow"
                src={HotelIcon}
                alt={restaurant.name}
              />

              <div className="flex-1">
                <h2 className="text-3xl font-semibold text-gray-800">
                  {restaurant.name}
                </h2>

                <div className="flex items-center space-x-2 mt-2 mb-5">
                  <img
                    className="w-5 h-5"
                    src={LocationIcon}
                    alt="Location Icon"
                  />
                  <p className="text-xl text-gray-600">{restaurant.address}</p>
                </div>

                <Link
                  to={`/${user.email}/restaurants/${restaurant.id}`}
                  className="bg-light-green-700 hover:bg-light-green-600 text-white font-bold px-4 py-2 rounded-xl transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
