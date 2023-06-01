import React from "react";
import { SocialMedia } from "../../DummyDb/DataB";

const Socials = () => {
  return (
    <>
      <div className=" bg-transparent flex justify-center mt-5 space-x-6">
        {SocialMedia.map((data, index) => (
          <a key={index} href={data.link} className="bg-transparent text-primary1 hover:text-primary2">
            <span className=" bg-transparent sr-only">{data.name}</span>
            {data.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default Socials;
