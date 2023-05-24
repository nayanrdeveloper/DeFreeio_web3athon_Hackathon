import React from "react";
import { SiVerizon } from "react-icons/si";

function JoinMarketplace() {
  return (
    <div className="px-3 py-4">
      <div className="grid grid-cols-2">
        <div>
          <h5 className="text-3xl font-medium">
            Join Worlds Best Marketplace for Workers
          </h5>
        </div>

        <div className="space-y-3">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
          <div className="space-y-4 mt-5">
            <div className="flex space-x-3 items-center">
                <SiVerizon className="w-5 h-5" />
                <p>Connect to freelancers with proven business experience</p>
            </div>
            <div className="flex space-x-3 items-center">
                <SiVerizon className="w-5 h-5" />
                <p>Get matched with the perfect talent by a customer success manager</p>
            </div>
            <div className="flex space-x-3 items-center">
                <SiVerizon className="w-5 h-5" />
                <p>Unmatched quality of remote, hybrid, and flexible jobs</p>
            </div>
          </div>
          <button className="block btn-common bg-white text-primary-green border border-primary-green hover:text-white hover:bg-primary-green hover:border-primary-green w-80">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default JoinMarketplace;
