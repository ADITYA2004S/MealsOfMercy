import React from "react";
const solutiondetails1 = [
  {
    title: "title1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita?",
  },
  {
    title: "title1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita?",
  },
  {
    title: "title1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita?",
  },
];

const solutiondetails2 = [
  {
    title: "title1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita?",
  },
  {
    title: "title1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, expedita?",
  },
];

export default function Solution() {
  return (
    <div className="solution-sec">
      <p className="solution-sec-title pt-20 text-6xl text-center font-bold text-shadow-lg pb-8">
        Our Business{" "}
        <span className="solution-sec-title-2 text-green ">Solution</span>
      </p>
      <div className="solution-sec-cards grid grid-cols-3 place-items-center gap-y-20 mt-10 ">
        {solutiondetails1.map((info) => (
          <div className="border-solid border-2 border-black rounded-lg text-center p-10">
            <p className="text-3xl pb-2">{info.title}</p>
            <p className="w-60 leading-normal ">{info.desc}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 mt-10 place-items-center items-center gap-x-10  ">
        {solutiondetails2.map((info) => (
          <div className="  border-2 border-solid border-black p-20 rounded-lg text-center ml-10 mr-10 ">
            <p className="text-3xl pb-2">{info.title}</p>
            <p className="text-lg">{info.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
