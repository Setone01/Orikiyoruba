import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-secondary w-full rounded px-2 md:px-4 py-4">
        <div className="bg-transparent px-2">
          <form className="w-full bg-transparent">
            <div className="flex flex-wrap -mx-3 mb-4 bg-transparent">
              <div className="bg-transparent w-full md:w-1/2 px-3  md:mb-0">
                <label
                  className="block bg-transparent capitalize tracking-wide text-primary1 text-sm font-normal mb-2"
                  htmlFor="grid-first-name"
                >
                  first name
                </label>
                <input
                  className='appearance-none block w-full bg-secondary text-primary3 font-light border border-primary1 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary1" id="grid-first-name'
                  type="text"
                  placeholder="Tunde"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 bg-transparent">
                <label
                  className="bg-transparent block capitalize tracking-wide text-primary1 text-sm font-normal mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-secondary text-primary3 font-light border border-primary1 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Bakare"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4 bg-transparent">
              <div className="w-full px-3 bg-transparent">
                <label
                  className="block capitalize bg-transparent tracking-wide text-primary1 text-sm font-normal mb-2"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-secondary text-primary3 font-light border border-primary1 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 bg-transparent">
              <div className="w-full px-3 bg-transparent">
                <label
                  className="block capitalize bg-transparent tracking-wide text-primary1 text-sm font-normal mb-2"
                  htmlFor="grid-message"
                >
                  Your message
                </label>
                <textarea
                  rows={10}
                  className="appearance-none block w-full bg-secondary text-primary3 font-light border border-primary1 rounded py-2 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div className="px-3 bg-transparent">
                <button
                  className="shadow bg-primary1 px-5 py-2 text-secondary text-base font-light rounded hover:bg-primary2 focus:shadow-outline focus:outline-none"
                  type="Submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
