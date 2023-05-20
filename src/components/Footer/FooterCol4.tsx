import React from "react";
import { BsApple, BsAndroid2 } from "react-icons/bs";

function FooterCol4() {
  return (
    <div>
      <h6 className="text-white font-semibold text-xl">Subscribe</h6>
      <div className="flex justify-between px-3 py-5 bg-[#FFFFFF17] rounded-lg mt-4">
        <input
          type={"text"}
          placeholder="Your email address"
          className="bg-transparent focus:outline-none focus:border-transparent text-white"
        />
        <button className="text-white">Send</button>
      </div>
      <div className="mt-5">
        <span className="text-white">Apps</span>
        <div className="mt-5 space-y-3">
          <div className="flex text-muted items-center space-x-2 hover:text-white cursor-pointer duration-300 transition transform ease-out">
            <BsApple className="w-5 h-5" />
            <span>ios App</span>
          </div>
          <div className="flex text-muted items-center space-x-2 hover:text-white cursor-pointer duration-300 transition transform ease-out">
            <BsAndroid2 className="w-5 h-5" />
            <span>Android App</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCol4;
