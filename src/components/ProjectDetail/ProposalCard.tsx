import { ProposalType } from "@/types";
import Image from "next/image";
import { BsFillCalendarDateFill } from "react-icons/bs";
import React from "react";

function ProposalCard({
  id,
  title,
  image,
  dateAgo,
  duration,
  price,
  proposal,
}: ProposalType) {
  return (
    <div className="border border-primary-gray rounded-lg px-3 py-3">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <div className="relative w-28 h-28">
            <Image src={image} alt={"Project"} fill className="object-cover" />
          </div>
          <div className="space-y-1">
            <p className="font-medium ">{title}</p>
            <div className="flex space-x-3">
              <BsFillCalendarDateFill className="w-5 h-5" />
              <span>{dateAgo}</span>
            </div>
            <p>{proposal}</p>
          </div>
        </div>

        <div>
          <p>${price}</p>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
}

export default ProposalCard;
