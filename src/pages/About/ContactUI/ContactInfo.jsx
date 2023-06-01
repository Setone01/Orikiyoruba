import React from "react";
import { IoMdCall } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi"
import { GrMail } from "react-icons/gr"

const ContactInfo = () => {
  return (
    <>
    <div className="bg-transparent group pr-4 py-3 max-w-max">
      <button className="flex justify-center items-center text-gray-200 bg-transparent text-sm font-light ml-4">
        <span className="bg-transparent">
          <IoMdCall size={25} className="bg-transparent mr-3 text-secondary
          "/>
        </span>
        +2348103142141
      </button>
    </div>
    <div className="bg-transparent group pr-4 py-3 max-w-max">
      <button className="flex justify-center items-center text-gray-200 bg-transparent text-sm font-light ml-4">
        <span className="bg-transparent">
          <GrMail size={25} className="bg-transparent mr-3 text-secondary
          "/>
        </span>
        hello@orikiyoruba.com
      </button>
    </div>
    <div className="bg-transparent group pr-4 py-3 max-w-max">
      <button className="flex justify-center items-center text-gray-200 bg-transparent text-sm font-light ml-4">
        <span className="bg-transparent">
          <HiLocationMarker size={25} className="bg-transparent mr-3 text-secondary
          "/>
        </span>
        Lagos, Nigeria
      </button>
    </div>
    </>
    
  );
};

export default ContactInfo;
