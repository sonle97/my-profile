import styled from "@emotion/styled";
import { Tabs } from "antd";

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
  padding: 10px 15px;
  margin-bottom: 0px;
  border-radius: 10px 10px 0px 0px;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  justify-content: center;
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
  transition: 0.4s;

  @media screen and (max-width: 500px) {
    .tab-item {
      padding: 10px 13px;
      margin: 0;
    }
  }

  @media screen and (max-width: 413px) {
    .tab-item {
      font-size: 12px;
      padding: 10px 12px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
    margin-bottom: 30px;
    position: relative;
    box-shadow: none;
    border-radius: 10px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    padding: 25px 15px;
  }
`;

export const ContentStyled = styled.div`
  background: white;
  padding: 20px 15px;
  margin-bottom: 30px;
  border-radius: 10px;
  min-height: 23rem;
  @media screen and (min-width: 1200px) {
    padding: 25px 25px;
  }
`;

export const TabsStyled = styled(Tabs)``;
