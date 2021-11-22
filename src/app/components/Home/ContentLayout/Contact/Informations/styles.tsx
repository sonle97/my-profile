import styled from "@emotion/styled";

export const InformationStyled = styled.div`
  width: 100%;
  margin-right: 0px;
  margin-bottom: 40px;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
  padding: 30px 20px;
  border-radius: 10px;
  &:hover {
    .thumbnail {
      img {
        transform: scale(1.1);
      }
    }
  }
  .thumbnail {
    margin-bottom: 28px;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 100%;
      height: auto;
      transition: 0.4s;
    }
  }
  .phone,
  .email {
    a {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 0%;
        background-color: #ff014f;
        height: 1px;
        left: 0;
        bottom: 2px;
        transition: 0.4s;
        z-index: 10;
      }
      &:hover {
        color: #ff014f;
        &::before {
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 38%;
    margin-bottom: 0px;
    padding: 30px;
  }
`;
