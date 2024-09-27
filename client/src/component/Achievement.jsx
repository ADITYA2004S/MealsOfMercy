import React from "react";

const achievementdetails = [
  {
    title: "Random Title",
    count: 250,
  },
  {
    title: "Random Title",
    count: 250,
  },
  {
    title: "Random Title",
    count: 250,
  },
];

export default function Achievement() {
  return (
    <div className="achievement-sec pt-20">
      <div className="achievement-sec-title">
        <p className="text-6xl font-bold text-center text-shadow-lg pb-20">
          We Serve The{" "}
          <span className="achievement-sec-title2 text-green ">People</span>{" "}
        </p>
      </div>
      <div className="achievement-details grid grid-cols-3 place-items-center">
        {achievementdetails.map((info) => (
          <div>
            <p className="text-4xl ">{info.title}</p>
            <p className="text-center text-5xl font-thin pt-5">{info.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
