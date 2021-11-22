import React from "react";
import ReactRotatingText from "react-rotating-text";

import { InformationStyled } from "./styles";
import { informations } from "../data";
import LinkedContact from "../../../ui/LinkedContact";

const Information = () => {
  return (
    <InformationStyled className="flex items-center ">
      <div className="avatar">
        <img
          src={informations.avatar}
          alt="avatar"
          className="cursor-pointer"
          onClick={() => window && window.open(informations.avatar, "_blank")}
        />
      </div>
      <div className="info">
        <div className="name md:text-8 text-2xl	text-gray-1 font-bold mb-3 ">
          {informations.name}
        </div>
        <div className="position text-gray-2 text-lg font-medium">
          I am a{" "}
          <span className="text-red-1 text-xl">
            {" "}
            <ReactRotatingText items={informations.position} />
          </span>
        </div>

        <LinkedContact informations={informations} className="mt-4 pt-4" />
      </div>
    </InformationStyled>
  );
};

export default Information;
