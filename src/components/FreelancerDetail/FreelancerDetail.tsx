import React from "react";
import FreelancerCardDetail from "./FreelancerCardDetail";
import FreelancerGeneral from "./FreelancerGeneral";
import FreelanceService from "./FreelanceService";

function FreelancerDetail() {
  return (
    <div>
      <div className="bg-pink py-10 px-10">
        <FreelancerGeneral />
      </div>
      <div className="flex justify-between py-10 px-10 w-full">
        <div className="w-[70%]">
          <FreelanceService />
          <div className="mt-5 space-y-3">
            <p className="font-semibold">About Freelancer</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
        <div className="w-[30%]">
          <FreelancerCardDetail />
        </div>
      </div>
    </div>
  );
}

export default FreelancerDetail;
