import React from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";

function FreelanceService() {
  return (
    <div className="flex space-x-5">
      <div className="flex space-x-2 items-center">
        <TbTargetArrow className="h-10 w-10 text-primary-dark-green" />
        <div className="flex flex-col space-y-1">
          <span className="font-medium">Project Success</span>
          <span>1</span>
        </div>
      </div>

      <div className="flex space-x-2 items-center">
        <BsFillFlagFill className="h-10 w-10 text-primary-dark-green" />
        <div className="flex flex-col space-y-1">
          <span className="font-medium">Total service</span>
          <span>1</span>
        </div>
      </div>

      <div className="flex space-x-2 items-center">
        <TbTargetArrow className="h-10 w-10 text-primary-dark-green" />
        <div className="flex flex-col space-y-1">
          <span className="font-medium">Completed Service</span>
          <span>1</span>
        </div>
      </div>

      <div className="flex space-x-2 items-center">
        <HiOutlineDocument className="h-10 w-10 text-primary-dark-green" />
        <div className="flex flex-col space-y-1">
          <span className="font-medium">In queue Service</span>
          <span>1</span>
        </div>
      </div>
    </div>
  );
}

export default FreelanceService;
