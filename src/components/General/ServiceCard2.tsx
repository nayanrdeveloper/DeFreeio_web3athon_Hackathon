import React from "react";
import { IconType } from "react-icons";

type ServiceCardType2 = {
  icon: IconType;
  title: string;
  value: string | number;
};

function ServiceCard2({ icon, title, value }: ServiceCardType2) {
  const Icon = icon;
  return (
    <div className="flex space-x-2 items-center">
      <Icon className="h-10 w-10 text-primary-dark-green" />
      <div className="flex flex-col space-y-1">
        <span className="font-medium">{title}</span>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default ServiceCard2;
