import { CategoryType } from "@/types";
import React from "react";

function CategoryCard({ id, icon, name, serviceCount }: CategoryType) {
  const Icon = icon;
  return (
    <div className="px-5 py-5 border border-primary-gray rounded-md hover:border-primary-black duration-300 transition transform ease-out">
      <Icon className="w-14 h-14 text-[#1F4B3F]" />
      <span>{serviceCount} Services</span>
      <h5 className="text-xl font-medium">{name}</h5>
    </div>
  );
}

export default CategoryCard;
