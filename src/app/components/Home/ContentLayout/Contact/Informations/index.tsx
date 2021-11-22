import React from "react";

import contact from "../../../../../../assets/img/contact.png";
import { InformationStyled } from "./styles";
import { informations } from "../../../Header/data";
import LinkedContact from "../../../../ui/LinkedContact";

const index = () => {
  return (
    <InformationStyled>
      <div className="thumbnail">
        <img src={contact} alt="img" />
      </div>
      <div className="text-3xl text-black-3 font-bold">{informations.name}</div>
      <div className="opacity-90 my-3.5">{informations.position[0]}</div>
      <div className="mb-3.5">{informations.description}</div>
      <div className="text-base phone">
        Phone:{" "}
        <a href={`tel:${informations.phone}`} className="text-gray-1">
          {informations.phone}
        </a>
      </div>
      <div className="text-base email">
        Email:{" "}
        <a href={`mailto:${informations.email}`} className="text-gray-1">
          {informations.email}
        </a>
      </div>

      <div className="mt-6 text-black-3 text-sm font-medium">FIND WITH ME</div>
      <LinkedContact
        informations={informations}
        className="justify-start mt-5"
        width={61}
        height={61}
        size={22}
      />
    </InformationStyled>
  );
};

export default index;
