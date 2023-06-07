import React from "react";
// import { Link } from "react-router-dom";
import { Recording } from "../../../component/Player/Music/MusicData";
import { TbMusic } from "react-icons/tb";

const PlayList = () => {
  return (
    <div className="w-screen max-h-max bg-primary1  z-40">
      <div className="w-full flex justify-center flex-col gap-8 md:flex-row px-5 md:px-20 py-16 bg-transparent">
        <div className="w-full max-h-max md:w-1/5 flex md:flex-col gap-4 px-4 py-5 rounded-lg flex-wrap overflow-x-hidden">
          {/* <div className=" "> */}
          <button className="  bg-white rounded-3xl font-semibold text-sm text-gray-600 border-2 border-primary1 outline-none  px-4 py-2 max-w-max">
            All
          </button>
          <button className=" flex-row bg-white rounded-3xl font-semibold text-sm text-gray-600 border-2 border-primary1 outline-none  px-4 py-2 max-w-max">
            Oriki Oruko
          </button>
          <button className=" bg-white rounded-3xl font-semibold text-sm text-gray-600 border-2 border-primary1  outline-none px-4 py-2 max-w-max">
            Oriki Orile
          </button>
          <button className=" bg-white rounded-3xl font-semibold text-sm text-gray-600 border-2 border-primary1  outline-none px-4 py-2 max-w-max">
            Oriki idile
          </button>
          {/* </div> */}
        </div>
        <div className="w-full md:w-4/5 flex justify-center items-center bg-white p-6 rounded-md">
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent ">
            {Recording.map((data, index) => (
              <div
                key={index}
                className=" flex item-center min-w-72 max-h-max gap-7 bg-secondary p-2 rounded-lg shadow-md"
              >
                <div className=" w-20 h-20 rounded-lg ">
                  {data.thumbnail ? (
                    <img
                      className="w-full h-full rounded-lg"
                      src={data.thumbnail}
                      alt=""
                    />
                  ) : (
                    <TbMusic className="bg-primary2 text-white w-full h-full rounded-lg object-cover" />
                  )}
                  {/* <img src={data.thumbnail} alt="" /> */}
                </div>
                <div className=" bg-transparent flex flex-col justify-center">
                  <h3 className=" bg-transparent text-gray-600 font-semibold capitalize mb-2">
                    {data.title}
                  </h3>
                  <span className=" bg-transparent text-gray-600 font-light text-sm capitalize">
                    {data.recorder}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
