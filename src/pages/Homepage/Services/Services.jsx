import React from "react";
import ServiceCont from "./ServiceCont";

const Services = () => {
  return (
    <section className="w-screen max-h-max px-2 md:px-20 mx-auto bg-[#EFFFFD] py-16 z-10">
      <div className="bg-transparent flex justify-center items-center flex-wrap flex-col">
        <div className="bg-transparent mb-6">
          <h1 className="bg-transparent text-primary1 capitalize font-bold text-4xl border-b-5 font-Euclid border-b-4 border-primary2">Our Services</h1>
        </div>
        <ServiceCont />
      </div>
    </section>
  );
};

export default Services;
