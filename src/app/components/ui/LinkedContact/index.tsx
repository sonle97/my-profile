import React from "react";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

import { LinkedContactStyled } from "./styles";

interface LinkedContactProps {
  informations: any;
  className?: string;
  width?: number;
  height?: number;
  size?: number;
}

const LinkedContact = ({
  informations,
  className,
  width,
  height,
  size = 20,
}: LinkedContactProps) => {
  return (
    <LinkedContactStyled
      className={`${className && className} flex items-center`}
      width={width}
      height={height}
    >
      <a
        href={informations.facebook}
        target="_blank"
        rel="noreferrer"
        className="link-contact"
      >
        <FiFacebook size={size} />
      </a>
      <a
        href={informations.instagram}
        target="_blank"
        rel="noreferrer"
        className="link-contact mx-4"
      >
        <AiOutlineInstagram size={size} />
      </a>
      <a
        href={informations.linkedin}
        target="_blank"
        rel="noreferrer"
        className="link-contact"
      >
        <FiLinkedin size={size} />
      </a>
    </LinkedContactStyled>
  );
};

export default LinkedContact;
