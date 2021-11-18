import styled from "@emotion/styled";

export const ContentLayoutStyled = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const TabStyled = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    padding: 25px 15px;
  }
`;

export const ContentStyled = styled(TabStyled)`
  background: white;
  padding: 20px 15px;
  margin-bottom: 30px;
  border-radius: 10px;
  @media screen and (min-width: 1200px) {
    padding: 25px 25px;
  }
`;
