import React from "react";

import Information from "./Information";
import InfoContact from "./InfoContact";
import { HeaderInfoStyled } from "./styles";
import { Container, Wrapper } from "../../../../ui/layout";

const HeaderInfo = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderInfoStyled className="flex items-center bg-white">
          <Information />
          <InfoContact />
        </HeaderInfoStyled>
      </Wrapper>
    </Container>
  );
};

export default HeaderInfo;
