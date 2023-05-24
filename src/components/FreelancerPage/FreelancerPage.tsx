import { freelancerList } from "@/constants";
import React from "react";
import FreelancerCard from "../Freelancer/FreelancerCard";

function FreelancerPage() {
  return (
    <div>
      <div className="bg-service-background py-10 px-10 object-cover space-y-3">
        <h5 className="font-medium text-3xl">Freelancers</h5>
        <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5 py-6 px-4">
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
    </div>
  );
}

export default FreelancerPage;
