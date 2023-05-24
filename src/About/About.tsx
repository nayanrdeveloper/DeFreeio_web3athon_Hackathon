import { aboutImageList } from "@/constants";
import Image from "next/image";
import React from "react";
import FreelanceFeature from "./FreelanceFeature";
import JoinMarketplace from "./JoinMarketplace";
import ReviewCount from "./ReviewCount";

function About() {
  return (
    <div>
      <div>
        <h5 className="text-3xl font-semibold">About</h5>
        <p>
          Give your visitor a smooth online experience with a solid UX design
        </p>
      </div>
      <div className="flex justify-around space-x-5 px-3 mt-5">
        {aboutImageList.map((aboutImage) => {
          return (
            <div key={aboutImage.id}>
              <Image
                src={aboutImage.image}
                alt={aboutImage.alt}
                height={300}
                width={300}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <JoinMarketplace />
      </div>
      <div>
        <FreelanceFeature />
        <ReviewCount />
      </div>
    </div>
  );
}

export default About;
