import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

import { AboutMeStyled } from "./styles";
import { AboutMe } from "../data";

const index = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <AboutMeStyled>
      <div className="about-image">
        <Swiper {...params}>
          {AboutMe.images.map((image: any, index: number) => (
            <img src={image} alt="about" key={index} />
          ))}
        </Swiper>
      </div>
      <div className="info-content-wrapper">
        <p className="text-red-3 font-medium text-sm uppercase mb-2 tracking-widest">
          VISIT MY PORTFOLIO & HIRE ME
        </p>
        <h1 className="text-gray-1 text-8 font-bold">About Me</h1>
        <p className="text-base text-gray-1 my-6">{AboutMe.description}</p>
        <ul className="text-gray-3 mb-8">
          {AboutMe.supports.map((title: string, idx: number) => (
            <li className="flex items-center text-base" key={idx}>
              <AiOutlineCheck className="mr-3" size={15} />
              <span>{title}</span>
            </li>
          ))}
        </ul>
        <a href="/files/cv.pdf" download>
          <div className="btn-download">Download my CV</div>
        </a>
      </div>
    </AboutMeStyled>
  );
};

export default index;
