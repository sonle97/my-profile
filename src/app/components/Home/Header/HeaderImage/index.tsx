import React from "react";
import styled from "@emotion/styled";

import bgImage from "../../../../../assets/img/bg_image.jpg";

const HeaderImageStyled = styled.div`
  background-image: url(${bgImage});
  height: 350px;
`;

const HeaderImage = () => {
  return (
    <HeaderImageStyled className="bg-cover bg-cover bg-center bg-no-repeat" />
  );
};

export default HeaderImage;
