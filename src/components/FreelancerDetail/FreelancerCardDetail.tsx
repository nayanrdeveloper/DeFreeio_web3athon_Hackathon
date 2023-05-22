import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineDocumentScanner, MdEmail } from "react-icons/md";
import {
  BsTranslate,
  BsGenderAmbiguous,
  BsTelephoneInbound,
} from "react-icons/bs";

function FreelancerCardDetail() {
  return (
    <div className="shadow-freelance-card px-5 py-5 rounded-lg border border-[#E9E9E9]">
      <p className="text-2xl font-semibold">
        $15 - $25<span className="text-sm">/hr</span>
      </p>
      <div className="space-y-3">
        <div className="border-b border-[#E9E9E9] py-3 flex justify-between items-center">
          <div className="flex space-x-3">
            <HiLocationMarker className="text-primary-dark-green h-6 w-6" />
            <span>Location</span>
          </div>
          <span className="font-medium">Los Angeles</span>
        </div>
        <div className="border-b border-[#E9E9E9] py-3 flex justify-between items-center">
          <div className="flex space-x-3">
            <MdOutlineDocumentScanner className="text-primary-dark-green h-6 w-6" />
            <span>Type</span>
          </div>
          <span className="font-medium">New Rising Talent</span>
        </div>
        <div className="border-b border-[#E9E9E9] py-3 flex justify-between items-center">
          <div className="flex space-x-3">
            <BsTranslate className="text-primary-dark-green h-6 w-6" />
            <span>English Level</span>
          </div>
          <span className="font-medium">Fluent</span>
        </div>
        <div className="border-b border-[#E9E9E9] py-3 flex justify-between items-center">
          <div className="flex space-x-3">
            <BsGenderAmbiguous className="text-primary-dark-green h-6 w-6" />
            <span>Gender</span>
          </div>
          <span className="font-medium">Male</span>
        </div>
        <div className="border-b border-[#E9E9E9] py-3 flex justify-between items-center">
          <div className="flex space-x-3">
            <MdEmail className="text-primary-dark-green h-6 w-6" />
            <span>Email</span>
          </div>
          <span className="font-medium">alitufan@apus.com</span>
        </div>
        <div className="border-b border-[#E9E9E9] py-3 flex justify-between items-center">
          <div className="flex space-x-3">
            <BsTelephoneInbound className="text-primary-dark-green h-6 w-6" />
            <span>Phone Number</span>
          </div>
          <span className="font-medium">(+88) 123-456-789</span>
        </div>
        <button className="block btn-common bg-primary-green text-white hover:text-primary-green hover:bg-white border border-transparent hover:border-primary-green">Contact Me</button>
      </div>
    </div>
  );
}

export default FreelancerCardDetail;
