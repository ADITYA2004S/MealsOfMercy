import React, { useEffect, useState } from "react";

// Ticket details
const ticketDetails = {
  username: "John Doe",
  hotelName: "Grand Hotel",
  dishSelected: "Pasta Primavera",
  managerName: "Alice Smith",
  mobileNumber: "123-456-7890",
  hotelLocation: "123 Main St, Cityville",
};

export default function Ticket() {
  const [displayDetails, setDisplayDetails] = useState({});

  useEffect(() => {
    const keys = Object.keys(ticketDetails);
    let index = 0;

    const interval = setInterval(() => {
      if (index < keys.length) {
        setDisplayDetails((prev) => ({
          ...prev,
          [keys[index]]: ticketDetails[keys[index]],
        }));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1500); // Adjust this value for the speed of the typewriter effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="bg-green-500 shadow-lg rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          Ticket Details
        </h2>
        {Object.keys(ticketDetails).map((key) => (
          <div className="mb-4" key={key}>
            <span className="font-semibold text-black">{`${
              key.charAt(0).toUpperCase() + key.slice(1)
            }:`}</span>
            <p className="text-black">
              {displayDetails[key] || ""} {/* Show the value or empty */}
            </p>
          </div>
        ))}
        <button className="w-full bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
          Confirm
        </button>
      </div>
    </div>
  );
}
