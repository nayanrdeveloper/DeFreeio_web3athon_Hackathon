import React from "react";
import { IconType } from "react-icons";

type ServiceCardType = {
  icon: IconType;
  title: string | number;
};

function ServiceCard({ icon, title }: ServiceCardType) {
  const Icon = icon;
  return (
    <div className="flex space-x-2 items-center">
      <Icon className="w-5 h-5" />
      <span>{title}</span>
    </div>
  );
}

export default ServiceCard;
