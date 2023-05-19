import React from "react";
import { MdMilitaryTech, MdComputer } from "react-icons/md";
import { BsSafe } from "react-icons/bs";

function WorkFlow() {
  return (
    <section className="bg-workflow-background py-28 px-10 h-[35rem] w-full relative">
      <div className="flex flex-col justify-center items-center -mr-[40rem]">
        <h6 className="font-semibold text-3xl">Need something done?</h6>
        <p className="text-sm">Most viewed and all-time top-selling services</p>
      </div>
      <div className="flex space-x-4 justify-center items-center -mr-56 mt-5">
        <div className="bg-white px-5 py-10 w-80 rounded-lg shadow-flow-card space-y-4">
            <MdMilitaryTech className="w-8 h-8" />
            <h6 className="font-medium text-xl">Post a job</h6>
            <p>It’s free and easy to post a job. Simply fill in a title, description.</p>
        </div>
        <div className="bg-white px-5 py-10 w-80 rounded-lg shadow-flow-card space-y-4">
            <MdComputer className="w-8 h-8" />
            <h6 className="font-medium text-xl">Choose freelancers</h6>
            <p>It’s free and easy to post a job. Simply fill in a title, description.</p>
        </div>
        <div className="bg-white px-5 py-10 w-80 rounded-lg shadow-flow-card space-y-4">
            <BsSafe className="w-8 h-8" />
            <h6 className="font-medium text-xl">Pay safely</h6>
            <p>It’s free and easy to post a job. Simply fill in a title, description.</p>
        </div>
      </div>
    </section>
  );
}

export default WorkFlow;
