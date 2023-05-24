import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";
import { HiLocationMarker, HiOutlineEye } from "react-icons/hi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import ServiceCard from "../General/ServiceCard";

function ServiceGeneral() {
  return (
    <div className="">
      <div className="flex space-x-3 items-center">
        <div>
          <h6 className="font-semibold text-3xl">
            Food Delivery Mobile App on IOS and Android
          </h6>
          <div className="flex space-x-3 items-center mt-5">
            <div className="flex space-x-2 items-center">
              <div className="relative w-10 h-10">
                <Image
                  src={
                    "https://demoapus1.com/freeio/wp-content/uploads/2022/10/8-150x150.jpg"
                  }
                  alt={"user"}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span>Thomas Powell</span>
            </div>

            <ServiceCard
              icon={BsFillCalendarDateFill}
              title={"September 14, 1996"}
            />
            <ServiceCard icon={HiOutlineEye} title={"1098 Views"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceGeneral;
