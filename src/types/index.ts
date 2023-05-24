import { IconType } from "react-icons";

export type NavItemType = {
  id: number;
  name: string;
  route: string;
};

export type ServiceType = {
  id: number;
  title: string;
  image: string;
  category: string;
  review: number;
  rating: number;
  views: number;
  deliveryTime: string;
  englishLevel: string;
  location: string;
  description: string;
  priceStart: number;
  company: {
    id: number;
    image: string;
    name: string;
    category: string;
    rating: number;
    location: string;
    priceStart: number;
    priceEnd: number;
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
  id: number;
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
  company: {
    image: string;
    name: string;
    category: string;
    rating: number;
    location: string;
    employeeStart: number;
    employeeEnd: number;
  };
};

export type CompanyType = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  rating: number;
  location: string;
  email: string;
  category: string;
  employeeStart: number;
  employeeEnd: number;
  foundedDate: string;
  phone: string;
  description: string;
};

export type FooterItemType = {
  id: number;
  name: string;
  route: string;
};

export type FooterType = {
  id: number;
  header: string;
  footerItems: FooterItemType[];
};

export type FooterSocialType = {
  id: number;
  name: string;
  icon: IconType;
  route: string;
};

export type ProposalType = {
  id: number;
  title: string;
  dateAgo: string;
  proposal: string;
  price: number;
  duration: string;
  image: string;
};

export type AboutImageType = {
  id: number;
  image: string;
  alt: string;
};
