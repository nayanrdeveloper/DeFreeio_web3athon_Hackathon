import React from "react";

function ProposalSubmit() {
  return (
    <div className="shadow-freelance-card px-5 py-5 rounded-lg border border-[#E9E9E9] space-y-4">
      <p className="font-semibold text-3xl">$89 - $99</p>
      <p className="font-normal">Fixed</p>
      <button className="block btn-common bg-primary-green text-white hover:text-primary-green hover:bg-white border border-transparent hover:border-primary-green w-80">
        Submit a Proposal
      </button>
    </div>
  );
}

export default ProposalSubmit;
