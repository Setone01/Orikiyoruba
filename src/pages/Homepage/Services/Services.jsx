import React from "react";
import ServiceCont from "./ServiceCont";

const Services = () => {
  return (
    <section className="w-screen max-h-max px-2 md:px-20 mx-auto bg-secondary py-16 z-10">
      <div className="bg-transparent flex justify-center items-center flex-wrap flex-col">
        <div className="bg-transparent mb-6">
          <h1 className="mb-4 bg-transparent text-primary1 text-3xl md:text-4xl font-extrabold">Our Services</h1>
        </div>
        <ServiceCont />
      </div>
    </section>
  );
};

export default Services;
