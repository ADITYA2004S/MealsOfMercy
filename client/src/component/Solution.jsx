import React from "react";
const solutiondetails1 = [
  {
    title: " Food Redistribution",
    desc: "Reducing food waste by connecting surplus meals to those in need. Saving the environment ",
  },
  {
    title: "Global Outreach",
    desc: "Leverage our international network to distribute food where it’s needed the most, creating global impact.",
  },
  {
    title: " Sustainability ",
    desc: "Our services align with global sustainability goals, helping you contribute to a greener and a healthier planet",
  },
];

const solutiondetails2 = [
  {
    title: "Cost-Efficient Resource",
    desc: "Minimize operational costs through smarter resource allocation, ensuring nothing goes to waste.",
  },
  {
    title: "Time-Saving Logistics",
    desc: " Automate and streamline your food donation logistics, reducing time spent on coordination.",
  },
];

export default function Solution() {
  return (
    <div className="solution-sec">
      <p className="solution-sec-title pt-20 text-6xl text-center font-bold text-shadow-lg pb-8">
        Our Business{" "}
        <span className="solution-sec-title-2 text-green ">Solution</span>
      </p>
      <div className="solution-sec-cards grid grid-cols-3 place-items-center gap-y-0 mt-10  ">
        {solutiondetails1.map((info) => (
          <div className="border-solid  border-2 border-black rounded-lg text-center p-10 hover:shadow-xl  hover:ease-in-out hover:scale-105 transition-transform duration-300 ">
            <p className="text-3xl pb-2">{info.title}</p>
            <p className="w-60 leading-normal text-justify">{info.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 mt-10 place-items-center items-center gap-x-10  ">
        {solutiondetails2.map((info) => (
          <div className="  border-2 border-solid border-black p-20 rounded-lg text-center ml-10 mr-10  ">
            <p className="text-3xl pb-2">{info.title}</p>
            <p className="text-lg">{info.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
