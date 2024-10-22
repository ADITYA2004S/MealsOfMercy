import React from "react";
import popular from "../images/popular.png";
import hotel from "../images/hotel.png";
import location from "../images/location.png";

const hotelInformation = [
  {
    name: "Hotel1",
    location: "123 Street, City A",
    img: hotel,
  },
  {
    name: "Hotel2",
    location: "456 Avenue, City B",
    img: hotel,
  },
  {
    name: "Hotel3",
    location: "789 Boulevard, City C",
    img: hotel,
  },
  {
    name: "Hotel4",
    location: "1010 Road, City D",
    img: hotel,
  },
  {
    name: "Hotel5",
    location: "1212 Lane, City E",
    img: hotel,
  },
];

export default function BusinessRegistration() {
  return (
    <div id="business">
      <p className="pt-5 pl-5 text-5xl">Good Morning UserName</p>
      <p className="text-xl pl-20 pt-2">Let's Explore today's Menu</p>

      <div className="flex justify-center relative">
        <img className="w-[80rem] rounded-xl" src={popular} alt="" />
        <div className="absolute grid grid-cols-2 justify-end">
          <p className="font-bold text-4xl text-yellow-500">Today's Popular</p>
          <button className="bg-yellow-500 w-fit m-auto px-2 rounded-lg">
            See Now
          </button>
        </div>
      </div>

      <div>
        {hotelInformation.map((info, index) => (
          <div key={index} className="pt-20 pl-40 flex space-x-20">
            <img className="w-40" src={info.img} alt={info.name} />
            <div>
              <p className="text-3xl pb-5 pt-5 font-Poppins font-bold">
                {info.name}
              </p>
              <div className="flex items-center space-x-2">
                <img className="w-5 h-5" src={location} alt="Location Icon" />
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
