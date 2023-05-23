import React from "react";
import { Link } from "react-router-dom";
import { Flinks } from "../DummyDb/DataB";
import Socials from "./Social/Socials";

const Footer = () => {
  return (
    <section className="border-t border-primary1 mt-auto">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-6 overflow-hidden sm:px-6 lg:px-8 ">
        <nav className="flex flex-wrap justify-center -mx-5 -my-4">
          {Flinks.map((data, index) => (
            <div key={index} className=" px-5 py-2">
              <Link to={data.path} className="text-primary1 font-Euclid">{data.links}</Link>
            </div>
          ))}
        </nav>
        <Socials />
        <p className="mt-5 text-base leading-6 text-center text-primary1 font-Euclid">© 2023 Oriki Yoruba, Inc. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
