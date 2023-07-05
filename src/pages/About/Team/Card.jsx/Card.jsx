import React from "react";
// import { Team_mate } from "../../../../DummyDb/DataB";
// import ProfImg from "../../../../Assets/images/smiling-g1b1c4bb77_1920.jpg";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Card = ({image, name, role, fblink,twitter}) => {
  return (
       <div className="bg-secondary max-w-md flex justify-center items-center flex-col shadow overflow-hidden rounded-lg px-10 py-7 mb-6 z-30">
       <div className="rounded-full bg-transparent">
         <img className=" w-32 h-32 rounded-full" src={image} alt="" />
       </div>
       <div className=" bg-transparent pt-5 px-1">
         <div className=" bg-transparent flex justify-center items-center flex-col pb-4">
           <h4 className=" bg-transparent font-semibold text-primary1 capitalize">
             {name}
           </h4>
           <small className=" bg-transparent text-sm text-gray-400 capitalize">
             {role}
           </small>
         </div>
 
         <div className=" bg-transparent flex justify-center items-center gap-5 text-primary2">
           <FaFacebook
             size={20}
             className=" bg-transparent cursor-pointer"
             href={fblink}
           />
           <FaTwitter
             size={20}
             className=" bg-transparent cursor-pointer"
             href={twitter}
           />
         </div>
       </div>
     </div>
  );
};

export default Card;
