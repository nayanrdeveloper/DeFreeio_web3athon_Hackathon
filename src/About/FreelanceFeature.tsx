import React from "react";
import { BiAward, BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Image from "next/image";

function FreelanceFeature() {
  return (
    <div className="bg-[#F0EFEC] px-4">
      <div className="flex justify-between">
        <div className="mt-6">
          <h6>A whole world of freelance talent at your fingertips</h6>
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

        <div>
          <Image
            src={
              "https://demoapus1.com/freeio/wp-content/uploads/2022/09/h1.jpg"
            }
            alt={""}
            height={350}
            width={350}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default FreelanceFeature;
