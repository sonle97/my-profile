import styled from "@emotion/styled";

export const OurTrustedClientsStyled = styled.div`
  text-align: center;
  margin-top: 40px;
  .our-trusted-clients-wrapper {
    .item {
      width: 100%;
      background: linear-gradient(145deg, #e2e8ec, #ffffff);
      box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
      text-align: center;
      border-radius: 10px;
      .image {
        width: 265px;
        height: 175px;
        padding: 30px;
        object-fit: contain;
        text-align: center;
        display: inline-block;
      }
      .name {
        padding: 16px;
        color: #7c838e;
        border-top: 1px solid #dce1e4;
        &:hover {
          color: #ff014f;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .our-trusted-clients-wrapper {
      .item {
        width: calc((100% / 4) - 15px);
      }
    }
  }
`;
