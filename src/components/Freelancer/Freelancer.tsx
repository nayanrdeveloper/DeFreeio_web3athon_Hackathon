import { freelancerList } from "@/constants";
import React from "react";
import GeneralHeader from "../General/GeneralHeader";
import FreelancerCard from "./FreelancerCard";

function Freelancer() {
  return (
    <section className="px-4 py-10">
      <GeneralHeader
        title="Highest Rated Freelancers"
        subTitle="Lorem ipsum dolor sit amet, consectetur."
        browseTitle="All Freelancer"
        route="/freelancers"
      />
      <div className="grid grid-cols-4 gap-2 mt-5">
        {freelancerList.map(
          ({
            id,
            name,
            category,
            country,
            description,
            email,
            englishLevel,
            gender,
            image,
            isSaved,
            phone,
            priceEnd,
            priceStart,
            rating,
            services,
            sinceJoin,
            skills,
            type,
          }) => {
            return (
              <FreelancerCard
                key={id}
                name={name}
                id={0}
                category={category}
                image={image}
                rating={0}
                country={country}
                sinceJoin={sinceJoin}
                type={type}
                englishLevel={englishLevel}
                gender={gender}
                email={email}
                phone={phone}
                priceStart={priceStart}
                priceEnd={priceEnd}
                description={description}
                isSaved={isSaved}
                skills={skills}
                services={{
                  projectSuccess: services.projectSuccess,
                  totalService: services.totalService,
                  completedService: services.completedService,
                  inQueueService: services.inQueueService,
                }}
              />
            );
          }
        )}
      </div>
    </section>
  );
}

export default Freelancer;
