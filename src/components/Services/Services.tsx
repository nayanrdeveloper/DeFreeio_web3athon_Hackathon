import { serviceList } from "@/constants";
import React from "react";
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <section className="px-4 py-5">
      <h3 className="text-4xl font-medium">Trending Service</h3>
      <div className="flex justify-between">
        <p className="text-muted">
          Most viewed and all-time top-selling services
        </p>
        <p>All Services</p>
      </div>
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
