import React from "react";
// import { FaEdit } from "react-icons/fa";

import { WhatIamDoingStyled } from "./styles";
import { WhatIamDoing } from "../data";

const index = () => {
  return (
    <WhatIamDoingStyled>
      <div className="text-gray-1 mb-7 font-bold text-xl">What I am Doing</div>
      <div className="flex flex-wrap doing-wrapper">
        {WhatIamDoing.map((item: any, idx: number) => (
          <div className="item text-gray-1 mb-4" key={idx}>
            {React.createElement(item.icon, {
              size: 50,
              className: "mx-auto text-red-3 mb-6",
            })}

            <div className="mb-5 font-bold text-xl">{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </WhatIamDoingStyled>
  );
};

export default index;
