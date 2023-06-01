import React from "react";
import ContactUs from "../../../../component/Form/EmailContact/ContactUs";
import ContactInfo from "../../ContactUI/ContactInfo";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa"


const Contact = () => {
  return (
    <div className="w-screen max-h-max">
      <div className="w-full h-full px-5 md:px-20 py-16 bg-primary1 grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className=" bg-transparent flex justify-between items-start flex-col group">
          <div className=" bg-transparent mb-3">
          <div className=" bg-transparent">
            <h1 className="bg-transparent text-secondary text-3xl mb-3">Get in Touch</h1>
          </div>
          <div className=" bg-transparent">
            <p className="bg-transparent text-gray-200 font-light text-sm">
              Fill up the Form and our Team will get back to you.
            </p>
          </div>
          </div>
          <div className="bg-transparent flex justify-center items-start flex-col my-8">
            <ContactInfo/>
          </div>
          <div className=" bg-transparent flex justify-center items-center mb-5 md:mb-0 gap-8">
            <div className="bg-transparent">
              <button>
                <FaFacebookF size={25} className=" text-primary2 bg-transparent hover:text-secondary"/>
              </button>
            </div>
            <div className="bg-transparent">
              <button>
                <BsInstagram size={25} className=" text-primary2 bg-transparent hover:text-secondary"/>
              </button>
            </div>
            <div className="bg-transparent">
              <button>
                <BsTwitter size={25} className=" text-primary2 bg-transparent hover:text-secondary"/>
              </button>
            </div>
            <div className="bg-transparent">
              <button>
                <BsYoutube size={25} className=" text-primary2 bg-transparent hover:text-secondary"/>
              </button>
            </div>
          </div>
        </div>
        <ContactUs/>
      </div>
    </div>
  );
};

export default Contact;
