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
  const [typedDetails, setTypedDetails] = useState({});
  const [currentDetail, setCurrentDetail] = useState("");
  const [currentKey, setCurrentKey] = useState(0);

  useEffect(() => {
    const keys = Object.keys(ticketDetails);
    let interval;

    if (currentKey < keys.length) {
      // Start typing effect for the current detail
      const detail = ticketDetails[keys[currentKey]];
      let charIndex = 0;

      interval = setInterval(() => {
        if (charIndex < detail.length) {
          setCurrentDetail((prev) => prev + detail[charIndex]);
          charIndex++;
        } else {
          // Move to the next key after typing the current detail
          setTypedDetails((prev) => ({
            ...prev,
            [keys[currentKey]]: detail,
          }));
          setCurrentKey((prev) => prev + 1);
          setCurrentDetail(""); // Reset current detail for the next one
          clearInterval(interval); // Stop typing for the current detail
        }
      }, 100); // Adjust speed of typing effect
    }

    return () => clearInterval(interval);
  }, [currentKey]);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 ">
      <div className="bg-green-500 shadow-lg rounded-lg p-6 w-80 ">
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          Ticket Details
        </h2>
        {Object.keys(ticketDetails).map((key) => (
          <div className="mb-4" key={key}>
            <span className="font-semibold text-black">{`${
              key.charAt(0).toUpperCase() + key.slice(1)
            }:`}</span>
            <p className="text-black">
              {typedDetails[key] || ""}{" "}
              {currentKey === Object.keys(ticketDetails).indexOf(key)
                ? currentDetail
                : ""}
            </p>
          </div>
        ))}
        <button className="w-full text-black text-green-500 px-4 py-2 rounded-lg bg-white transition duration-300">
          Confirm
        </button>
      </div>
    </div>
  );
}
