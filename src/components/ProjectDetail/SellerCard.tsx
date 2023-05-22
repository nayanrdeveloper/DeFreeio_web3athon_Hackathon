import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";

function SellerCard() {
  return (
    <div className="shadow-freelance-card px-5 py-5 rounded-lg border border-[#E9E9E9] space-y-4">
      <p className="text-xl">About Seller</p>
      <div className="flex items-center px-2 space-x-3">
        <div>
          <div className="relative h-12 w-12">
            <Image
              src={
                "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer5.jpg"
              }
              alt={"seller"}
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <div>
          <h5>DesignBlue</h5>
          <p>Open Project - 1</p>
          <div className="flex space-x-2 items-center">
            <IoMdStar className="text-yellow w-5 h-5" />
            <span>4.8 </span>
            <span> (4 Reviews)</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 justify-between border-t border-primary-gray pt-5">
        <div className="flex flex-col">
          <span className="font-semibold">Location</span>
          <span>New York</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Employees</span>
          <span>15-20</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Categories</span>
          <span>Business</span>
        </div>
      </div>
      <button className="block btn-common bg-white text-primary-green border border-primary-green hover:text-white hover:bg-primary-green hover:border-primary-green w-80">Contact Me</button>
    </div>
  );
}

export default SellerCard;
