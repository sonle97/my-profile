import styled from "@emotion/styled";

export const ListCardStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 1200px) {
    justify-content: start;
  }
`;

export const CardStyled = styled.div`
  width: 100%;
  margin-bottom: 30px;
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
  text-align: left;
  padding: 30px 20px;
  position: relative;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  .thumbnail {
    display: block;
    overflow: hidden;
    border-radius: 10px;
    img {
      border-radius: 10px;
      width: 100%;
      transition: 0.4s;
      height: auto;
      object-fit: cover;
    }
  }
  &:hover {
    .thumbnail {
      img {
        border-radius: 10px;
        transform: scale(1.1);
      }
    }
  }
  &:nth-of-type(3n-1) {
    margin-right: 0px;
    margin-left: 0px;
  }

  .title {
    margin-top: 10px;
    color: #1e2125;
    transition: 0.4s;
    font-weight: 600;
    font-size: 23px;
    line-height: 34px;
    .icon {
      font-size: 0;
      position: relative;
      top: 10px;
      transition: 0.4s;
      display: inline-block;
    }
    &:hover {
      color: #ff014f;
      .icon {
        top: 0px;
        opacity: 1;
        font-size: 23px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: calc((100% / 2) - 15px);
    padding: 30px;
  }

  @media screen and (min-width: 1200px) {
    width: calc((100% / 3) - 20px);
    &:nth-of-type(3n-1) {
      margin-right: 30px;
      margin-left: 30px;
    }
  }
`;

export const Button = styled.button`
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
