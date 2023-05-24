import React from "react";
import SellerCard from "../ProjectDetail/SellerCard";
import ServiceCount from "./ServiceCount";
import ServiceGeneral from "./ServiceGeneral";

function ServiceDetail() {
  return (
    <div>
      <div className="bg-[#F0EFEB] py-10 px-10">
        <ServiceGeneral />
      </div>
      <div className="flex justify-between py-10 px-10 w-full space-x-4">
        <div className="w-[70%]">
          <ServiceCount />
          <div className="mt-5 space-y-3">
            <p className="font-semibold text-2xl">Service Description</p>
            <p className="text-muted">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>

        <div className="w-[30%] space-y-4">
          <SellerCard />
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
