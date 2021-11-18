import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

import { AboutMeStyled } from "./styles";
import { AboutMe } from "../data";

const index = () => {
  return (
    <AboutMeStyled>
      <div className="about-image">
        <img src={AboutMe.images[0]} alt="about" />
      </div>
      <div className="info-content-wrapper">
        <p className="text-red-3 font-medium text-sm uppercase mb-2 tracking-widest">
          VISIT MY PORTFOLIO & HIRE ME
        </p>
        <h1 className="text-gray-1 text-8 font-bold">About Me</h1>
        <p className="text-base text-gray-1 my-6">{AboutMe.description}</p>
        <ul className="text-gray-3 mb-8">
          {AboutMe.supports.map((title: string, idx: number) => (
            <li className="flex items-center" key={idx}>
              <AiOutlineCheck className="mr-3" size={15} />
              <span>{title}</span>
            </li>
          ))}
        </ul>
        <div className="btn-download">Download my CV</div>
      </div>
    </AboutMeStyled>
  );
};

export default index;
