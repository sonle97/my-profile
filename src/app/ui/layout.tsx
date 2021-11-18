import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0px 15px;

  @media screen and (min-width: 576px) {
    max-width: 576px;
  }
  @media screen and (min-width: 768px) {
    max-width: 790px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1310px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 40px;
`;

export const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
