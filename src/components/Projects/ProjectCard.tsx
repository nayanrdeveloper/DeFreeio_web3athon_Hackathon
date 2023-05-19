import { ProjectType } from "@/types";
import Image from "next/image";
import React from "react";
import { BiLocationPlus, BiRocket } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";

function ProjectCard({
  id,
  name,
  company,
  description,
  duration,
  englishLevel,
  language,
  level,
  location,
  locationType,
  priceEnd,
  priceStart,
  projectType,
  requiredSkills,
  sinceJoin,
  views,
}: ProjectType) {
  return (
    <div className="px-5 py-5 bg-white rounded-md">
      <div className="flex space-x-4">
        <div className="relative w-14 h-14">
          <Image
            src={company.image}
            alt={company.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-2">
          <h5 className="text-xl font-semibold hover:text-primary-green transition transform duration-300 ease-out cursor-pointer">{name}</h5>
          <p className="text-primary-green">{company.name}</p>
          <div className="flex flex-col space-y-2 text-muted">
            <div className="flex space-x-2 items-center">
              <BiLocationPlus className="w-5 h-5" />
              <span>{company.location}</span>
            </div>
            <div className="flex space-x-2 items-center">
              <BsCalendarDate className="w-5 h-5" />
              <span>{"Posted 6 month ago"}</span>
            </div>
            <div className="flex space-x-2 items-center">
              <BiRocket className="w-5 h-5" />
              <span>{11} proposals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
