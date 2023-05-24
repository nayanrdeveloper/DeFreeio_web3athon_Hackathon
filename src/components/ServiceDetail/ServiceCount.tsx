import React from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import ServiceCard2 from "../General/ServiceCard2";

function ServiceCount() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <ServiceCard2
        icon={BiTime}
        title={"Delivery Time"}
        value={"2 Days"}
      />
      <ServiceCard2
        icon={BsFillFlagFill}
        title={"English level"}
        value={"Native Or Bilingual"}
      />
      <ServiceCard2
        icon={HiLocationMarker}
        title={"Location"}
        value={"New York"}
      />
    </div>
  );
}

export default ServiceCount;
