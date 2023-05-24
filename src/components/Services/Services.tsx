import { serviceList } from "@/constants";
import React from "react";
import GeneralHeader from "../General/GeneralHeader";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <section className="px-4 py-5">
      <GeneralHeader
        title="Trending Service"
        subTitle="Most viewed and all-time top-selling services"
        browseTitle="All Services"
        route="/services"
      />
      <div className="grid grid-cols-4 gap-x-8 gap-y-8 mt-5">
        {serviceList.map(
          ({
            id,
            title,
            description,
            category,
            company,
            deliveryTime,
            englishLevel,
            image,
            location,
            priceStart,
            rating,
            review,
            views,
          }) => {
            return (
              <ServicesCard
                key={id}
                title={title}
                description={description}
                category={category}
                company={company}
                deliveryTime={deliveryTime}
                englishLevel={englishLevel}
                id={id}
                image={image}
                location={location}
                priceStart={priceStart}
                rating={rating}
                review={review}
                views={views}
              />
            );
          }
        )}
      </div>
    </section>
  );
}

export default Services;
