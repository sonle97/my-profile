import styled from "@emotion/styled";
import Modal from "../../../../ui/Modal";

export const ModalPortfolioStyled = styled(Modal)`
  .img_portfolio {
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
  color: #ff014f;
  border-radius: 6px;
  transition: 0.4s;
  position: relative;
  font-size: 13px;
  font-weight: 500;
  padding: 10px 20px;
  line-height: 1;
  svg {
    transition: 0.4s;
  }
  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(145deg, #ff014f, #d11414);
    color: #ffffff;
    svg {
      color: #ffffff;
    }
  }

  @media screen and (min-width: 540px) {
    font-size: 14px;
    padding: 15px 35px;
  }
`;
