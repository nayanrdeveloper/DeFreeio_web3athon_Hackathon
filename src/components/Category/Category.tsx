import { categoryList } from "@/constants";
import React from "react";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <section className="px-4 py-10">
      <h3 className="text-4xl font-medium">Highest Rated Freelancers</h3>
      <div className="flex justify-between">
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur.</p>
        <p>All Category</p>
      </div>
      <div className="grid grid-cols-7 gap-2 mt-5">
        {categoryList.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              icon={category.icon}
              serviceCount={category.serviceCount}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Category;
