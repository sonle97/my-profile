import { FaEdit } from "react-icons/fa";
import brand from "../../../../../assets/img/brand.png";
import about_img from "../../../../../assets/img/myImages/about_img.jpg";

interface WhatIamDoingProps {
  icon: any;
  title: string;
  description: string;
}

interface OurTrustedClientsProps {
  image: any;
  name: string;
}

export const AboutMe = {
  images: [about_img],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci.",
  supports: ["Web Design Full stack", "24/7 Support", "Unlimited Revisions"],
};

export const WhatIamDoing: WhatIamDoingProps[] = [
  {
    icon: FaEdit,
    title: "Web Design Full stack",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.  dolor sit amet, consectetur adipisicing elit. Eum in",
  },
  {
    icon: FaEdit,
    title: "Web Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.",
  },
  {
    icon: FaEdit,
    title: "App Developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.",
  },
  {
    icon: FaEdit,
    title: "Mobile App",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.",
  },
];

interface OurTrustedClientsProps {
  image: any;
  name: string;
}

export const OurTrustedClients: OurTrustedClientsProps[] = [
  {
    image: brand,
    name: "Marth Smiths",
  },
  {
    image: brand,
    name: "Marth Smiths",
  },
  {
    image: brand,
    name: "Marth Smiths",
  },
  {
    image: brand,
    name: "Marth Smiths",
  },
];
