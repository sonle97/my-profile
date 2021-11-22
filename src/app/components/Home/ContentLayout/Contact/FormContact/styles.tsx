import styled from "@emotion/styled";

export const FormContactStyled = styled.div`
  width: 100%;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
  padding: 30px 20px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 58%;
    padding: 30px;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
  color: #ff014f;
  border-radius: 6px;
  transition: 0.4s;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  padding: 15px 35px;
  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(145deg, #ff014f, #d11414);
    color: #ffffff;
  }
`;

export const Label = styled.div`
  color: #3c3e41;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 14px;
  text-align: left;
`;
