import React from "react";
import styled from "@emotion/styled";

import bgImage from "../../../../../assets/img/myImages/bg_two.jpg";

const HeaderImageStyled = styled.div`
  background-image: url(${bgImage});
  height: 350px;
`;

const HeaderImage = () => {
  return <HeaderImageStyled className="bg-cover bg-center bg-no-repeat" />;
};

export default HeaderImage;
