import { CategoryType, FreelancerType, NavItemType } from "@/types";
import {
  MdOutlineDesignServices,
  MdLanguage,
  MdOutlineComputer,
} from "react-icons/md";
import {
  BsFillMicFill,
  BsCameraVideo,
  BsPencilSquare,
  BsGraphDownArrow,
} from "react-icons/bs";

const navItems: NavItemType[] = [
  {
    id: 1,
    name: "Home",
    route: "",
  },
  {
    id: 2,
    name: "Projects",
    route: "",
  },
  {
    id: 3,
    name: "Jobs",
    route: "",
  },
  {
    id: 4,
    name: "Freelancers",
    route: "",
  },
  {
    id: 5,
    name: "About",
    route: "",
  },
  {
    id: 6,
    name: "Contact",
    route: "",
  },
];

const freelancerList: FreelancerType[] = [
  {
    id: 1,
    name: "Samuel Smith",
    category: "Design & Creative",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/10/team2-150x150.jpg",
    rating: 4,
    country: "New York",
    sinceJoin: "November 10, 1990",
    type: "New Rising Talent",
    englishLevel: "Fluent",
    gender: "Female",
    email: "samuelsmith@apus.com",
    phone: "(+88) 123-456-789",
    priceStart: 12,
    priceEnd: 45,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    isSaved: true,
    skills: ["Design Writing", "Figma", "Software Design"],
    services: {
      completedService: 2,
      inQueueService: 5,
      projectSuccess: 1,
      totalService: 3,
    },
  },
  {
    id: 2,
    name: "Tom Karan",
    category: "Marketing Manager",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/10/9-150x150.jpg",
    rating: 6,
    country: "Los Angeles",
    sinceJoin: "November 9, 1986",
    type: "Agency Freelancers",
    englishLevel: "Fluent",
    gender: "Male",
    email: "freelancer@apus.com",
    phone: "(+88) 123-456-789",
    priceStart: 12,
    priceEnd: 45,
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    isSaved: true,
    skills: ["Animation", "Creative"],
    services: {
      completedService: 8,
      inQueueService: 2,
      projectSuccess: 5,
      totalService: 4,
    },
  },
  {
    id: 1,
    name: "Robert Fox",
    category: "Nursing Assistant",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/10/team5-150x150.jpg",
    rating: 3.9,
    country: "New York",
    sinceJoin: "November 10, 1990",
    type: "New Rising Talent",
    englishLevel: "Fluent",
    gender: "Female",
    email: "samuelsmith@apus.com",
    phone: "(+88) 123-456-789",
    priceStart: 35,
    priceEnd: 50,
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    isSaved: false,
    skills: ["Design Writing", "Figma", "Software Design"],
    services: {
      completedService: 8,
      inQueueService: 2,
      projectSuccess: 9,
      totalService: 2,
    },
  },
  {
    id: 4,
    name: "Thomas Powell",
    category: "Design & Creative",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/10/8-150x150.jpg",
    rating: 4.5,
    country: "Los Angeles",
    sinceJoin: "November 10, 1995",
    type: "Agency Freelancers",
    englishLevel: "Fluent",
    gender: "Male",
    email: "thomaspowell@apus.com",
    phone: "(+88) 123-456-789",
    priceStart: 45,
    priceEnd: 80,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    isSaved: true,
    skills: ["Prototyping", "Creative", "Figma"],
    services: {
      completedService: 4,
      inQueueService: 9,
      projectSuccess: 0,
      totalService: 1,
    },
  },
];

const categoryList: CategoryType[] = [
  {
    id: 1,
    name: "Developement & IT",
    serviceCount: 3,
    icon: MdOutlineComputer,
  },
  {
    id: 2,
    name: "Digital Marketing",
    serviceCount: 2,
    icon: MdOutlineDesignServices,
  },
  {
    id: 3,
    name: "Writing & Translation",
    serviceCount: 8,
    icon: MdLanguage,
  },
  {
    id: 4,
    name: "Music & Audio",
    serviceCount: 6,
    icon: BsFillMicFill,
  },
  {
    id: 5,
    name: "Video & Animation",
    serviceCount: 5,
    icon: BsCameraVideo,
  },
  {
    id: 6,
    name: "Programming & Tech",
    serviceCount: 3,
    icon: BsPencilSquare,
  },
  {
    id: 7,
    name: "Fina % Accounting",
    serviceCount: 5,
    icon: BsCameraVideo,
  },
];

export { navItems, freelancerList, categoryList };
