import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  academic,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  import_export,
  menu1,
  multi_industry,
  real_estate,
  stock,
  tender,
  textile
  

} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "home",
    title: "Home",
  },
   {
    id: "about",
    title: "About Us",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "whyus",
    title: "Why Us",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

const services: TService[] = [
  {
    title: "Global Reach",
    icon: web,
  },
  {
    title: "Trusted by Businesses",
    icon: mobile,
  },
  {
    title: "Expertise in Government Tenders",
    icon: backend,
  },
  {
    title: "Ensured Client Satisfaction",
    icon: redux,
  }
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Real Estate & Land Promotion",
    companyName: "",
    icon: real_estate,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "We specialize in land acquisition, development, and promotion, helping investors and businesses make the best real estate decisions.",
    ],
  },
  {
    title: "Investment and Trading",
    companyName: "",
    icon: stock,
    iconBg: "#383E56",
    date: "",
    points: [
      "We provide highly secure and profitable trading opportunities across industries, ensuring steady growth and financial success.",
    ],
  },
  {
    title: "Educational Government Tenders",
    companyName: "",
    icon: academic,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Enabling educational development through strategic infrastructure projects in collaboration with public sector programs.",
    ],
  },
  {
    title: "Import and Export",
    companyName: "",
    icon: import_export,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "With a strong global network, we manage cross\u2011border trade efficiently, handling everything from logistics to compliance.",
    ],
  },
  
  {
    title: "Central Government Tenders and Procurement",
    companyName: "",
    icon: tender,
    iconBg: "#383E56",
    date: "",
    points: [
      "We actively participate in GeM (Government\u2011e\u2011Marketplace) tenders, offering trusted solutions for public sector procurement.",
    ],
  },
  
  {
    title: "Garments & Textile Industry",
    companyName: "",
    icon: textile,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "From raw materials to finished products, we supply and trade premium-quality textiles and garments for both domestic and global markets.",
    ],
  },
  {
    title: "Non-Perishable Food Items Import & Export",
    companyName: "",
    icon: menu1,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "We source, distribute, and export high-quality food products, ensuring strict quality control and global compliance.",
    ],
  },
  {
    title: "Multi-Industry Trading Solutions",
    companyName: "",
    icon: multi_industry,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "From commodities to niche markets, we facilitate diverse trading opportunities, making transactions smooth and profitable.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      " Real estate, trading, garments, textiles, and food exports.",
    name: "Diverse Industry",
    designation: "Experience",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Expertise in public sector procurement and tender processes.",
    name: "Trusted Partner",
    designation: "for",
    company: "Government Tenders",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "From strategy development to execution and compliance.",
    name: "End-to-End ",
    designation: "Business",
    company: "Solutions",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Risk-free investments and high returns.",
    name: "Secure & Profittable",
    designation: "Business",
    company: "Deals",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: git,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: git,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: git,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
