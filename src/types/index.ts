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
