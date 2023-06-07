import React from "react";
import { BsQuote } from "react-icons/bs";
import { swiperContent } from "../../../DummyDb/DataB";

const Testimonial = () => {
  return (
    <div className="w-screen bg-white md:px-20 py-16 px-5">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="mb-12">
          <h1 className="mb-4 text-primary1 text-3xl md:text-4xl font-extrabold">Testimonial</h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {swiperContent.map((data, index) => (
            <div
              key={index}
              className=" bg-white shadow-lg p-5 rounded-md border border-primary2/80 group"
            >
              <div className=" mb-4">
                <span>
                  <BsQuote size={50} className="text-primary1" />
                </span>
                <p className="text-sm text-primary3">{data.comment}</p>
              </div>
              <div className=" flex items-center">
                <img
                  src={data.image}
                  className="w-16 h-16 rounded-full mr-5 object-cover"
                  alt=""
                />
                <div className="flex flex-col ">
                  <h5 className="text-lg font-semibold text-primary1 capitalize">
                    {data.name}
                  </h5>
                  <small className="text-gray-400">{data.state}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
