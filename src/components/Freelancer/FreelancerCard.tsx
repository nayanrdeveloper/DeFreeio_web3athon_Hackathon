import { FreelancerType } from "@/types";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import React from "react";

function FreelancerCard({
  name,
  category,
  country,
  description,
  email,
  englishLevel,
  gender,
  id,
  image,
  isSaved,
  phone,
  priceEnd,
  priceStart,
  rating,
  services,
  sinceJoin,
  skills,
  type,
}: FreelancerType) {
  console.log(image);
  console.log(name);

  return (
    <div className="p-4 border border-primary-gray rounded-lg">
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="relative w-20 h-20">
          <Image src={image} alt={name} fill className="rounded-full" />
        </div>
        <h5 className="font-semibold text-xl text-primary-black">{name}</h5>
        <p className="text-muted text-sm">{category}</p>
        <div className="flex space-x-2">
          <IoMdStar className="w-5 h-5 text-yellow" />
          <span className="font-medium">{rating}</span>
          <span className="text-muted">(2 Review)</span>
        </div>
        <div className="flex space-x-2">
          {skills.map((skill, index) => {
            return (
              index < 2 && (
                <div
                  className="px-3 py-2 bg-pink rounded-md text-sm btn-common hover:bg-primary-black hover:text-white"
                  key={index}
                >
                  {skill}
                </div>
              )
            );
          })}
        </div>
        <div className="border-t border-primary-gray pt-2 mt-4">
          <div className="space-x-4 font-medium">
            <span>Location : </span>
            <span>Rate:</span>
          </div>
          <div className="space-x-4">
            <span>{country}</span>
            <span>{`$${priceStart}-$${priceEnd} / hr`}</span>
          </div>
        </div>
        <button className="btn-common border border-primary-black mx-auto hover:bg-primary-black hover:text-white">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default FreelancerCard;
