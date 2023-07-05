import React from "react";
import Card from "./Card.jsx/Card";
// import { Team_mate } from "../../../DummyDb/DataB";
import Slider from "react-slick";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full py-10">
      <div className=" w-[90%] m-auto ">
        <Slider {...settings}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        {/* <div>
            <h3 className=" bg-transparent text-blue-600 flex items-center justify-center">1</h3>
          </div>
          <div>
            <h3 className=" bg-transparent text-blue-600 flex items-center justify-center">2</h3>
          </div>
          <div>
            <h3 className=" bg-transparent text-blue-600 flex items-center justify-center">3</h3>
          </div>
          <div>
            <h3 className=" bg-transparent text-blue-600 flex items-center justify-center">4</h3>
          </div>
          <div className=" bg-transparent text-blue-600 flex items-center justify-center">
            <h3>5</h3>
          </div>
          <div className=" bg-transparent text-blue-600 flex items-center justify-center">
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
