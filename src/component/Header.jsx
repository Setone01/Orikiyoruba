import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "../DummyDb/DataB.js";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <header className=" w-full h-20 rgba(255, 255, 255, 0.5) py-2 z-50 fixed">
      <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="logo">
          <Link to="/">
            <h1 className="text-primary1 font-Euclid">Oriki Yoruba</h1>
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center ">
            {links.map((data, index) => (
              <Link
                key={index}
                className="text-primary3 hover:text-primary2 px-7 font-Euclid"
                to={data.path}
              >
                {data.name}
              </Link>
            ))}
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden text-primary3">
          {nav ? (
            <MdOutlineClose size={30} className="text-black" />
          ) : (
            <FiMenu size={25} />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full bg-primary2 absolute top-20 left-0 flex items-start text-left "
              : "absolute left-[-100%]"
          }
        >
          <ul className="w-full px-2 flex flex-col pb-10 bg-primary2">
            {links.map((data, index) => (
              <Link
                key={index}
                to={data.path}
                onClick={closeNav}
                className=" text-[16px]  text-white hover:text-primary2 py-2 font-Euclid border-b border-gray-300 bg-primary2"
              >
                {data.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
