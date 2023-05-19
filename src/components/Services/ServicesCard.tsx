import { ServiceType } from "@/types";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import React from "react";

function ServicesCard({
  id,
  category,
  company,
  deliveryTime,
  description,
  englishLevel,
  image,
  location,
  priceStart,
  rating,
  review,
  title,
  views,
}: ServiceType) {
  return (
    <div className="border border-primary-gray rounded-lg">
      <div className="relative h-72 w-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="px-4 space-y-2">
        <p className="text-muted text-sm mt-3">{category}</p>
        <h5 className="font-medium text-xl hover:text-primary-green hover:underline transition transform ease-out duration-300 cursor-pointer" title={title}>
          {`${title.substring(0,45)}...`}
        </h5>
        <div className="flex space-x-2 items-center">
          <IoMdStar className="w-5 h-5 text-yellow" />
          <span>{rating} </span>
          <span className="text-muted">({review} Reviews)</span>
        </div>
      </div>
      <div className="border-t pt-4 px-4 border-primary-gray mt-6 flex justify-between">
        <div className="flex space-x-2 items-center cursor-pointer">
          <div className="relative w-8 h-8">
            <Image
              src={company.image}
              alt={company.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h6 className="hover:text-primary-green transition transform duration-300 ease-out">
            {company.name}
          </h6>
        </div>
        <div>
          <p className="text-muted">Starting at:</p>
          <p className="text-end font-semibold">${company.priceStart}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
