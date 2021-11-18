import styled from "@emotion/styled";

export const FooterStyled = styled.div`
  padding: 15px 0 60px;
  text-align: center;
  position: relative;
  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    margin: 0 auto;
    border: 2px solid #7c838e;
    border-radius: 50%;
    padding: 2px;
    cursor: pointer;
  }
  .name {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 0%;
      height: 1px;
      background-color: #ff014f;
      left: 0;
      bottom: 3px;
      transition: 0.4s;
    }
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 30px 0 80px;
  }
`;
