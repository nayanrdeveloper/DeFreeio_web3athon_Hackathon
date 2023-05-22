import React from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";

import { HiLocationMarker } from "react-icons/hi";
import { BiMoneyWithdraw, BiTimeFive } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import { BsTranslate } from "react-icons/bs";
import { MdOutlineBusiness } from "react-icons/md";
import ServiceCard2 from "../General/ServiceCard2";

function ProjectService() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <ServiceCard2
        icon={HiLocationMarker}
        title={"Project location type"}
        value={"Onsite"}
      />
      <ServiceCard2
        icon={BiMoneyWithdraw}
        title={"Project Type"}
        value={"fixed"}
      />
      <ServiceCard2 icon={BiTimeFive} title={"Duration"} value={"2 -3 Hours"} />
      <ServiceCard2 icon={FiThumbsUp} title={"Level"} value={"Fluent"} />
      <ServiceCard2 icon={BsTranslate} title={"Language"} value={"English"} />
      <ServiceCard2
        icon={MdOutlineBusiness}
        title={"English Level"}
        value={"Conversational"}
      />
    </div>
  );
}

export default ProjectService;
