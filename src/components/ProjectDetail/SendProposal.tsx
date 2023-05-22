import React from "react";

function SendProposal() {
  return (
    <div>
      <div className="flex space-x-2 w-full">
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Your Hourly Price</label>
          <input
            type={"number"}
            className="border border-primary-gray rounded-md focus:border-black focus:outline-none px-2 py-2 w-96"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Your Hourly Price</label>
          <input
            type={"number"}
            className="border border-primary-gray rounded-md focus:border-black focus:outline-none px-2 py-2 w-96"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="">Cover Letter</label>
        <textarea className="border border-primary-gray rounded-md focus:border-black focus:outline-none px-2 py-2 w-full h-36" />
      </div>
      <button className="block btn-common bg-primary-green text-white hover:text-primary-green hover:bg-white border border-transparent hover:border-primary-green w-80 mt-5">
        Submit a Proposal
      </button>
    </div>
  );
}

export default SendProposal;
