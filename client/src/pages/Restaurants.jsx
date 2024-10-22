import { useState, useEffect } from "react";
import axios from "axios";

import LocationIcon from "../images/location.png";
import PopularIcon from "../images/popular.png";
import HotelIcon from "../images/hotel.png";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const restaurants = await axios.get("/api/restaurant");
      setRestaurants(restaurants.data);
    };

    fetch();
  }, []);

  return (
    <div id="business">
      <p className="pt-5 pl-5 text-5xl">Good Morning UserName</p>
      <p className="text-xl pl-20 pt-2">Let&apos;s Explore today&apos;s Menu</p>

      <div className="flex justify-center relative">
        <img className="w-[80rem] rounded-xl" src={PopularIcon} alt="" />

        <div className="absolute grid grid-cols-2 justify-end">
          <p className="font-bold text-4xl text-yellow-500">
            Today&apos;s Popular
          </p>
          <button className="bg-yellow-500 w-fit m-auto px-2 rounded-lg">
            See Now
          </button>
        </div>
      </div>

      <div>
        {restaurants.length !== 0 &&
          restaurants.map((info, index) => (
            <div key={index} className="pt-20 pl-40 flex space-x-20">
              <img className="w-40" src={HotelIcon} alt={info.name} />

              <div>
                <p className="text-3xl pb-5 pt-5 font-Poppins font-bold">
                  {info.name}
                </p>

                <div className="flex items-center space-x-2">
                  <img className="w-5 h-5" src={LocationIcon} alt="Location Icon" />
                  <p className="text-xl">{info.location}</p>
                </div>

                <button className="bg-light-green-700 px-3 py-1 rounded-xl mt-5 text-white font-bold">
                  Book Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
