import { categoryList } from "@/constants";
import React from "react";
import GeneralHeader from "../General/GeneralHeader";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <section className="px-4 py-10">
      <GeneralHeader
        title="Browse talent by category"
        subTitle="Get some Inspirations from 1800+ skills"
        browseTitle="All Categories"
        route="/"
      />
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
