import { IconType } from "react-icons";

export type NavItemType = {
  id: number;
  name: string;
  route: string;
};

export type ServiceType = {
  id: number;
  image: string;
  title: string;
  isFavorite: boolean;
  category: string;
  rating: number;
  review: number;
  user: {
    id: number;
    name: string;
    image: string;
    pricingStart: number;
  };
};

type FreelanceServiceType = {
  projectSuccess: number;
  totalService: number;
  completedService: number;
  inQueueService: number;
};

export type CategoryType = {
  id: number;
  icon: IconType;
  name: string;
  serviceCount: number;
};

export type FreelancerType = {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  country: string;
  sinceJoin: string;
  type: string;
  englishLevel: string;
  gender: string;
  email: string;
  phone: string;
  priceStart: number;
  priceEnd: number;
  description: string;
  isSaved: boolean;
  skills: string[];
  services: FreelanceServiceType;
};

export type ProjectType = {
  id: string;
  name: string;
  location: string;
  sinceJoin: string;
  views: number;
  locationType: string;
  projectType: string;
  duration: string;
  level: string;
  language: string;
  englishLevel: string;
  priceStart: number;
  priceEnd: number;
  description: string;
  requiredSkills: string[];
};
