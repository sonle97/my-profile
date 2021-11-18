import React from "react";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

import { InformationStyled } from "./styles";
import { informations } from "../data";

const Information = () => {
  return (
    <InformationStyled className="flex items-center ">
      <div className="avatar">
        <img src={informations.avatar} alt="avatar" />
      </div>
      <div className="info">
        <div className="name md:text-8 text-2xl	text-gray-1 font-bold mb-3 ">
          {informations.name}
        </div>
        <div className="position text-gray-2 text-lg font-medium">
          I am a <span className="text-red-1">{informations.position[0]}</span>
        </div>
        <div className="flex items-center mt-4 pt-4 link-contact-wrapper">
          <a
            href={informations.facebook}
            target="_blank"
            rel="noreferrer"
            className="link-contact"
          >
            <FiFacebook size={20} />
          </a>
          <a
            href={informations.instagram}
            target="_blank"
            rel="noreferrer"
            className="link-contact mx-4"
          >
            <AiOutlineInstagram size={20} />
          </a>
          <a
            href={informations.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-contact"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </InformationStyled>
  );
};

export default Information;
