import React from "react";

import { OurTrustedClientsStyled } from "./styles";
import { OurTrustedClients } from "../data";

const index = () => {
  return !!OurTrustedClients.length ? (
    <OurTrustedClientsStyled>
      <div className="text-gray-1 mb-7 font-bold text-xl">
        Our trusted Clients
      </div>

      <div className="flex flex-wrap justify-between our-trusted-clients-wrapper">
        {OurTrustedClients.map((item: any, idx: number) => (
          <div className="item text-gray-1 mb-4" key={idx}>
            <img src={item.image} alt="img" className="image" />
            <div className="name">{item.name}</div>
          </div>
        ))}
      </div>
    </OurTrustedClientsStyled>
  ) : (
    <></>
  );
};

export default index;
