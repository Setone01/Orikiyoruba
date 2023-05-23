import React from "react";
import { Content } from "../../../DummyDb/DataB";

const ServiceCont = () => {
  return (
    <div className="bg-transparent w-full grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
      {Content.map((data, index) => (
        <div
          key={index}
          className="flex w-full bg-transparent justify-center items-center flex-col py-6 px-2"
        >
          <div className=" rounded-3xl bg-primary1 mb-6">
            <img className="bg-transparent w-16 h-16 rounded p-3" src={data.icon} alt={data.title} />
          </div>
          <h2 className="bg-transparent text-primary1 text-xl text-center font-bold capitalize mb-3 font-Euclid">
            {data.title}
          </h2>
          <p className=" bg-transparent  text-center text-primary3 text-[1rem] font-light font-Euclid">
            {data.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCont;
