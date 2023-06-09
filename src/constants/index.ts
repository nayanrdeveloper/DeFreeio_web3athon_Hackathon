import {
  AboutImageType,
  CategoryType,
  FooterItemType,
  FooterSocialType,
  FooterType,
  FreelancerType,
  NavItemType,
  ProjectType,
  ProposalType,
  ServiceType,
} from "@/types";
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
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const navItems: NavItemType[] = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Projects",
    route: "/projects",
  },
  {
    id: 3,
    name: "Service",
    route: "/services",
  },
  {
    id: 4,
    name: "Freelancers",
    route: "/freelancers",
  },
  {
    id: 5,
    name: "About",
    route: "/about",
  },
  // {
  //   id: 6,
  //   name: "Contact",
  //   route: "",
  // },
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

const projectList: ProjectType[] = [
  {
    id: 1,
    name: "Food Delivery Mobile App on IOS and Android",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    duration: "2 -3 Hours",
    englishLevel: "Conversational",
    level: "Fluent",
    language: "English",
    location: "New York",
    locationType: "Onsite",
    priceEnd: 20,
    priceStart: 30,
    projectType: "fixed",
    requiredSkills: [
      "Adobe Photoshop",
      " Adobe XD",
      "Android Developer",
      "Computer",
    ],
    sinceJoin: "November 10, 2022",
    views: 200,
    company: {
      category: "Business",
      employeeEnd: 10,
      employeeStart: 20,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer5.jpg",
      location: "New York",
      name: "DesignBlue",
      rating: 4.5,
    },
  },
  {
    id: 2,
    name: "Developer for ACG iOS apps and Website",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    duration: "November 10, 2022",
    englishLevel: "Professional",
    level: "Fluent",
    language: "Italian",
    location: "Miami",
    locationType: "Remote",
    priceEnd: 79,
    priceStart: 89,
    projectType: "hourly",
    requiredSkills: [
      "Artist",
      "Front end Developer",
      "IOS Developer",
      "Writter",
    ],
    sinceJoin: " November 10, 2022",
    views: 232,
    company: {
      category: "Designer",
      employeeEnd: 50,
      employeeStart: 60,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer4.jpg",
      location: "New York",
      name: "APInter",
      rating: 4.5,
    },
  },
  {
    id: 3,
    name: "English Content Writer for College",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    duration: "1 Day",
    englishLevel: "Fluent",
    level: "Native",
    language: "English",
    location: "Los Angeles",
    locationType: "Partial Onsite",
    priceEnd: 29,
    priceStart: 39,
    projectType: "fixed",
    requiredSkills: [
      "Computer",
      "Artist",
      "Support Agent",
      "IOS Developer",
      "Writter",
    ],
    sinceJoin: "",
    views: 234,
    company: {
      category: "Digital Marketing",
      employeeEnd: 34,
      employeeStart: 80,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer1.jpg",
      location: "Los Angeles",
      name: "MediaAZ",
      rating: 3.6,
    },
  },
  {
    id: 4,
    name: "Developer to framework for web agency",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    duration: "2 -3 Hours",
    englishLevel: "Conversational",
    level: "Native",
    language: "English",
    location: "New York",
    locationType: "Remote",
    priceEnd: 67,
    priceStart: 90,
    projectType: "hourly",
    requiredSkills: ["HTML", "CSS", "Javascript"],
    sinceJoin: "November 10, 2022",
    views: 236,
    company: {
      category: "Writing & Translation",
      employeeEnd: 40,
      employeeStart: 80,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer8.png",
      location: "New York",
      name: "Redesign",
      rating: 4.5,
    },
  },
  {
    id: 5,
    name: "PHP, Javascript Projects for Beginners",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    duration: "2 -3 Days",
    englishLevel: "Native Or Bilingual",
    level: "Basic level",
    language: "English",
    location: "India",
    locationType: "Remote",
    priceEnd: 67,
    priceStart: 98,
    projectType: "fixed",
    requiredSkills: ["PHP", "Jquery", "Bootstrrap", "Tailwind CSS"],
    sinceJoin: "November 10, 2022",
    views: 200,
    company: {
      category: "Digital Marketing",
      employeeEnd: 60,
      employeeStart: 90,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/11/employer11.jpg",
      location: "New York",
      name: "Employer",
      rating: 3.1,
    },
  },
];

const serviceList: ServiceType[] = [
  {
    id: 1,
    description: "Flexibility & Customization with CMS vs PHP Framework",
    deliveryTime: "2 Days",
    category: "Developement & IT",
    englishLevel: "Native Or Bilingual",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/elementor/thumbs/service10-py2khwd9b307cpru7zo4vne3y7r9bf2fwt3v6dbncw.jpg",
    location: "New York",
    priceStart: 40,
    rating: 3.5,
    review: 3,
    title: "Flexibility & Customization with CMS vs PHP Framework",
    views: 123,
    company: {
      id: 1,
      category: "Design & Creative",
      priceStart: 20,
      priceEnd: 10,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/10/8-150x150.jpg",
      location: "Los Angeles",
      name: "Thomas Powell",
      rating: 4.0,
    },
  },
  {
    id: 1,
    category: "UI/UX Designer",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    deliveryTime: "2 Days",
    englishLevel: "Fluent",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/elementor/thumbs/service9-py2khwd9b307cpru7zo4vne3y7r9bf2fwt3v6dbncw.jpg",
    location: "New York",
    priceStart: 158,
    rating: 4.5,
    review: 7,
    title: "PHP framework that you can use to create your own custom",
    views: 200,
    company: {
      id: 1,
      category: "UI/UX Designer",
      priceStart: 15,
      priceEnd: 25,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/09/bg-video-150x150.png",
      location: "Los Angeles",
      name: "Ali Tufan",
      rating: 4.5,
    },
  },
  {
    id: 1,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    category: "UI/UX Designer",
    deliveryTime: "2 Days",
    englishLevel: "Conversational",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/elementor/thumbs/service13-py2khwd9b307cpru7zo4vne3y7r9bf2fwt3v6dbncw.jpg",
    location: "New York",
    priceStart: 89,
    rating: 4.2,
    review: 7,
    title: "Management software to help you manage your mobile workers",
    views: 123,
    company: {
      id: 1,
      category: "UI/UX Designer",
      priceStart: 68,
      priceEnd: 88,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/09/bg-video-150x150.png",
      location: "New York",
      name: "Ali Tufan",
      rating: 3.6,
    },
  },
  {
    id: 1,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    category: "Developement & IT",
    deliveryTime: "2 Month",
    englishLevel: "Conversational",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/elementor/thumbs/service12-py2khwd9b307cpru7zo4vne3y7r9bf2fwt3v6dbncw.jpg",
    location: "New York",
    priceStart: 29,
    rating: 4.2,
    review: 15,
    title: "Web development, with HTML, CSS, JavaScript and PHP",
    views: 129,
    company: {
      id: 1,
      category: "Nursing Assistan",
      priceStart: 60,
      priceEnd: 65,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/10/12-150x150.jpg",
      location: "India",
      name: "Agent Pakulla",
      rating: 3.6,
    },
  },
  {
    id: 1,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    category: "Design & Development",
    deliveryTime: "1 Year",
    englishLevel: "Conversational",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/elementor/thumbs/service8-py2khwd9b307cpru7zo4vne3y7r9bf2fwt3v6dbncw.jpg",
    location: "New York",
    priceStart: 126,
    rating: 2.9,
    review: 45,
    title: "Developers drop the framework folder into a new parent",
    views: 123,
    company: {
      id: 1,
      category: "Product Manager",
      priceStart: 55,
      priceEnd: 60,
      image:
        "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
      location: "Los Angeles",
      name: "John Powell",
      rating: 3.0,
    },
  },
];

const footerPrivacyItems: FooterItemType[] = [
  {
    id: 1,
    name: "Terms of Service",
    route: "/",
  },
  {
    id: 1,
    name: "Privacy Policy",
    route: "/",
  },
  {
    id: 1,
    name: "Site Map",
    route: "/",
  },
];

const socialMediaItems: FooterSocialType[] = [
  {
    id: 1,
    name: "Facebook",
    icon: FaFacebookF,
    route: "/",
  },
  {
    id: 1,
    name: "Twitter",
    icon: FaTwitter,
    route: "/",
  },
  {
    id: 1,
    name: "Instagram",
    icon: FaInstagram,
    route: "/",
  },
  {
    id: 1,
    name: "Linkdin",
    icon: FaLinkedinIn,
    route: "/",
  },
];

const footerCol1Items: FooterType = {
  id: 1,
  header: "About",
  footerItems: [
    {
      id: 1,
      name: "About Us",
      route: "/",
    },
    {
      id: 2,
      name: "Become Seller",
      route: "/",
    },
    {
      id: 3,
      name: "Services DeFreeio",
      route: "/",
    },
    {
      id: 4,
      name: "Terms of Service",
      route: "/",
    },
    {
      id: 5,
      name: "Jobs on DeFreeio",
      route: "/",
    },
  ],
};

const footerCol2Items: FooterType = {
  id: 1,
  header: "Categories",
  footerItems: [
    {
      id: 1,
      name: "Design & Creative",
      route: "/",
    },
    {
      id: 2,
      name: "Development & IT",
      route: "/",
    },
    {
      id: 3,
      name: "Music & Audio",
      route: "/",
    },
    {
      id: 4,
      name: "Programming & Tech",
      route: "/",
    },
    {
      id: 5,
      name: "Digital Marketing",
      route: "/",
    },
  ],
};

const footerCol3Items: FooterType = {
  id: 1,
  header: "Support",
  footerItems: [
    {
      id: 1,
      name: "Help & Support",
      route: "/",
    },
    {
      id: 2,
      name: "FAQ DeFreeio",
      route: "/",
    },
    {
      id: 3,
      name: "Contact Us",
      route: "/",
    },
    {
      id: 4,
      name: "Services",
      route: "/",
    },
    {
      id: 5,
      name: "Terms of Service",
      route: "/",
    },
  ],
};

const proposalList: ProposalType[] = [
  {
    id: 1,
    title: "Food Delivery Mobile App on IOS and Android",
    dateAgo: "4 weeks ago",
    duration: "in 55 hours",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer8.png",
    price: 99,
    proposal:
      "I have 10 years experience in Frotned Development so please Accept me",
  },
  {
    id: 2,
    title: "Food Delivery Mobile App on IOS and Android",
    dateAgo: "1 month ago",
    duration: "in 4 hours",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer4.jpg",
    price: 126,
    proposal: "Fronted Developer adn my service are all time greate",
  },
  {
    id: 3,
    title: "Freelancer",
    dateAgo: "1 Year ago",
    duration: "in 10 Days",
    image:
      "https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer8.png",
    price: 230,
    proposal:
      "All time my service are greate so Enjoy your time all me the best",
  },
];

const aboutImageList : AboutImageType[] = [
  {
    id: 1,
    image: "https://demoapus1.com/freeio/wp-content/uploads/2022/09/about1.jpg",
    alt: "About-1",
  },
  {
    id: 2,
    image: "https://demoapus1.com/freeio/wp-content/uploads/2022/09/about2.jpg",
    alt: "About-2",
  },
  {
    id: 3,
    image: "https://demoapus1.com/freeio/wp-content/uploads/2022/09/about3.jpg",
    alt: "About-3",
  },
  {
    id: 4,
    image: "https://demoapus1.com/freeio/wp-content/uploads/2022/09/about4.jpg",
    alt: "About-4",
  },
];

export {
  navItems,
  freelancerList,
  categoryList,
  projectList,
  serviceList,
  footerPrivacyItems,
  socialMediaItems,
  footerCol1Items,
  footerCol2Items,
  footerCol3Items,
  proposalList,
  aboutImageList,
};
