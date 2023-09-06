import React from "react";
import ife from "../../../../Assets/images/WhatsApp Image 2023-08-16 at 16.23.12 (1).jpeg";

const CityUI = () => {
  return (
    <div className=" w-[500px] h-[250px] flex justify-between items-center p-4 border border-primary1 rounded-lg">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={ife}
          alt=""
        />
      </div>
      <div className="w-full h-full flex justify-between flex-col pl-5">
        <div className="">
          <h4 className="text-xl font-semibold uppercase mb-5">ile-ife</h4>
          <p className=" text-sm font-thin">
            [including Modákẹ́kẹ́ and other surrounding towns under ancient Ifẹ̀
            Kingdom]
          </p>
        </div>
        <button className=" bg-primary2 text-white rounded-xl px-8 py-3 capitalize text-sm font-normal max-w-max">
          See Eulogies
        </button>
      </div>
    </div>
  );
};

export default CityUI;
