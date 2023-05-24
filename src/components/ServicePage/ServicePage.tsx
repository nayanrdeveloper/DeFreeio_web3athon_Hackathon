import { serviceList } from "@/constants";
import React from "react";
import ServicesCard from "../Services/ServicesCard";

function ServicePage() {
  return (
    <div>
      <div className="bg-pink py-10 px-10 object-cover space-y-3">
        <h5 className="font-medium text-3xl">Service List</h5>
        <p>Give your visitor a smooth online experience with a solid UX design</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5 py-6 px-4" >
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
    </div>
  );
}

export default ServicePage;
