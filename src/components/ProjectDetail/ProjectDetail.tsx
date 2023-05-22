import { proposalList } from "@/constants";
import React from "react";
import ProjectGeneral from "./ProjectGeneral";
import ProjectService from "./ProjectService";
import ProposalCard from "./ProposalCard";
import ProposalSubmit from "./ProposalSubmit";
import SellerCard from "./SellerCard";
import SendProposal from "./SendProposal";

function ProjectDetail() {
  return (
    <div>
      <div className="bg-pink py-10 px-10">
        <ProjectGeneral />
      </div>
      <div className="flex justify-between py-10 px-10 w-full space-x-4">
        <div className="w-[70%]">
          <ProjectService />
          <div className="mt-5 space-y-3">
            <p className="font-semibold text-2xl">Project Description</p>
            <p className="text-muted">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="">
              <p className="font-semibold">Skills Required</p>
              <div className="flex space-x-3 mt-3">
                <span className="bg-pink px-2 py-1 rounded-2xl hover:bg-primary-black  hover:text-white ease-out transition transform duration-300 cursor-pointer">
                  Adobe Photoshop
                </span>
                <span className="bg-pink px-2 py-1 rounded-2xl hover:bg-primary-black  hover:text-white ease-out transition transform duration-300 cursor-pointer">
                  Android Developer
                </span>
                <span className="bg-pink px-2 py-1 rounded-2xl hover:bg-primary-black  hover:text-white ease-out transition transform duration-300 cursor-pointer">
                  Adobe XD
                </span>
                <span className="bg-pink px-2 py-1 rounded-2xl hover:bg-primary-black  hover:text-white ease-out transition transform duration-300 cursor-pointer">
                  Figma
                </span>
              </div>
            </div>
            {/* Your Proposal */}
            <div>
              <p>Your Proposal (10)</p>
              <div className="space-y-3">
                {proposalList.map((proposal) => {
                  return (
                    <ProposalCard
                      key={proposal.id}
                      title={proposal.title}
                      dateAgo={proposal.dateAgo}
                      duration={proposal.duration}
                      id={proposal.id}
                      image={proposal.image}
                      price={proposal.price}
                      proposal={proposal.proposal}
                    />
                  );
                })}
              </div>
            </div>
            {/* Submit Proposal */}
            <p>Send Your Proposal</p>
            <SendProposal />
          </div>
        </div>
        <div className="w-[30%] space-y-4">
          <ProposalSubmit />
          <SellerCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
