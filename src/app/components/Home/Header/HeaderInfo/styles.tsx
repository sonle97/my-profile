import styled from "@emotion/styled";

export const HeaderInfoStyled = styled.div`
  margin-top: -100px;
  margin-left: 0;
  margin-right: 0;
  padding: 20px;
  border-radius: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const InformationStyled = styled.div`
  flex: 0 0 50%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex-direction: column;
  .avatar {
    img {
      border: 5px solid #ecf0f3;
      border-radius: 15px;
      max-height: 200px;
      position: relative;
      top: -80px;
    }
  }
  .info {
    margin-left: 0px;
    margin-top: -46px;
    text-align: center;
  }

  .link-contact-wrapper {
    justify-content: space-evenly;
    .link-contact {
      width: 53px;
      height: 53px;
      line-height: 50px;
      display: inline-block;
      background: linear-gradient(145deg, #e2e8ec, #ffffff);
      box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
      text-align: center;
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
      border-radius: 6px;
      transition: 0.4s;
      position: relative;
      z-index: 1;
      svg {
        color: rgba(0, 0, 0, 0.384);
        display: inline-block;
      }
      &:hover {
        transform: translateY(-5px);
        background: linear-gradient(to right bottom, #212428, #ff014f);
        svg {
          color: #ffffff;
        }
      }
    }
  }

  &::before {
    content: "";
    background: #dce1e4;
    position: absolute;
    top: 106%;
    right: 0;
    bottom: -13px;
    height: 1px;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 50%;
    &::before {
      top: 0;
      bottom: 0;
      height: 100%;
      width: 1px;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    .info {
      margin-left: 30px;
      text-align: left;
      margin-top: 0;
    }
    .link-contact-wrapper {
      justify-content: normal;
      .link-contact {
        margin: 0 15px 15px 0;
      }
    }
  }

  .react-rotating-text-cursor {
    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s
      infinite;
  }

  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const InfoContactStyled = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 100%;
  flex-direction: column;
  align-items: start;
  margin-top: 40px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    align-items: start;
    max-width: 50%;
    justify-content: start;
    margin-top: 0px;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
  }
`;
