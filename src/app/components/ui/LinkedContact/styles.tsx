import styled from "@emotion/styled";

interface LinkContactProps {
  width?: number;
  height?: number;
}

export const LinkedContactStyled = styled.div`
  .link-contact {
    width: ${(props: LinkContactProps) =>
      props.width ? props.width + "px" : "53px"};
    height: ${(props: LinkContactProps) =>
      props.height ? props.height + "px" : "53px"};
    display: flex;
    align-items: center;
    justify-content: center;
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
`;
