import React from "react";
import { BiAward, BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { SiVerizon } from "react-icons/si";

function FreelancerBanner() {
  return (
    <section className="bg-freelance-background py-20 px-10 h-[35rem]">
      <div className="flex justify-between items-center justify-items-center mt-20">
        <div className="">
          <p className="font-semibold text-3xl">
            A whole world of freelance talent at your fingertips
          </p>
          <div className="space-y-8 mt-8">
            <div className="flex space-x-4">
              <BiAward className="h-8 w-8 text-[#1F4B3F]" />
              <div>
                <h6 className="font-medium text-xl">Proof of quality</h6>
                <p>
                  Check any pros work samples, client reviews, and identity
                  verification.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <BiMoneyWithdraw className="h-8 w-8 text-[#1F4B3F]" />
              <div>
                <h6 className="font-medium text-xl">No cost until you hire</h6>
                <p>
                  Check any pros work samples, client reviews, and identity
                  verification.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <AiOutlineSafetyCertificate className="h-8 w-8 text-[#1F4B3F]" />
              <div>
                <h6 className="font-medium text-xl">Safe and secure</h6>
                <p>
                  Check any pros work samples, client reviews, and identity
                  verification.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-primary-black p-5 space-y-3 w-96 rounded-lg flex-col">
            <div className="flex space-x-2 items-center">
              <SiVerizon className="text-primary-black p-2 w-8 h-8 bg-white rounded-full" />
              <p className="text-white">The best for every budget</p>
            </div>
            <div className="flex space-x-2 items-center">
              <SiVerizon className="text-primary-black p-2 w-8 h-8 bg-white rounded-full" />
              <p className="text-white">Quality work done quickly</p>
            </div>
            <div className="flex space-x-2 items-center">
              <SiVerizon className="text-primary-black p-2 w-8 h-8 bg-white rounded-full" />
              <p className="text-white">Protected payments, every time</p>
            </div>
            <div className="flex space-x-2 items-center">
              <SiVerizon className="text-primary-black p-2 w-8 h-8 bg-white rounded-full" />
              <p className="text-white">24/7 support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreelancerBanner;
