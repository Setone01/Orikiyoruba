import React from "react";
import { carousel } from "../../../DummyDb/DataB";
import useScrollHook from "../../../lib/useScrollHook";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const { scrollRef } = useScrollHook();

  const navigateAbout = () => {
    navigate("/about");
  };

  return (
    <div className="flex items-center justify-center md:h-screen h-[80vh] w-screen relative z-5">
      <div
        ref={scrollRef}
        className="w-full flex overflow-hidden h-full md:w- relative"
      >
        {carousel.map((data, index) => (
          <div className="min-w-full h-full ">
            <img
              key={index}
              src={data.Image}
              alt={`Slide ${index + 1}`}
              className="min-w-full min-h-full object-cover "
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50 flex items-start justify-center flex-col lg:px-20 pl-5 ">
        <h1 className="bg-transparent text-white md:font-semibold font-bold font-Euclid w-68 md:text-6xl text-4xl text-left mb-8 z-10">
          Oriki Yoruba and History
        </h1>
        <p className="bg-transparent text-white md:w-96 w-80 font-light font-Euclid text-medium z-10 mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          facilis, vitae eos quasi corrupti molestias!
        </p>
        <button
          onClick={navigateAbout}
          className="bg-primary1 font-light rounded px-6 py-2 text-white text-medium text-base font-Euclid z-10 hover:bg-primary2"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Carousel;
