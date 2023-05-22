import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillCalendarDateFill } from "react-icons/bs";

function FreelancerGeneral() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 items-center">
        <div className="relative w-28 h-28">
          <Image
            src={
              "https://demoapus1.com/freeio/wp-content/uploads/2022/09/bg-video-150x150.png"
            }
            alt={"user"}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h6 className="font-semibold text-xl">Alif Tufan</h6>
          <p className="font-light">UI/UX Developer</p>
          <div className="flex space-x-3 items-center">
            <div className="flex space-x-2 items-center">
              <IoMdStar className="text-yellow w-5 h-5" />
              <span>4.8 </span>
              <span> (4 Reviews)</span>
            </div>
            <div className="flex space-x-2 items-center">
              <HiLocationMarker className="w-5 h-5" />
              <span>Los Angeles </span>
            </div>
            <div className="flex space-x-2 items-center">
              <BsFillCalendarDateFill className="w-5 h-5" />
              <span>September 14, 1996</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex space-x-4">
          <button className="btn-common bg-primary-green text-white hover:bg-[#43a062]">
            Invite
          </button>
          <button className="btn-common bg-primary-green text-white hover:bg-[#43a062]">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default FreelancerGeneral;
