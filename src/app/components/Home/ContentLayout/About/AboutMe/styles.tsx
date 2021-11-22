import styled from "@emotion/styled";

export const AboutMeStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .about-image {
    border-radius: 8px;
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    overflow: hidden;
    img {
      border-radius: 8px;
      transition: 0.4s;
      width: 100%;
      &:hover {
        transform: scale(1.08);
      }
    }
    .swiper-container {
      .swiper-pagination {
        .swiper-pagination-bullet-active {
          background: #ff014f;
        }
      }
    }
  }
  .info-content-wrapper {
    padding: 0 15px;
    width: 100%;
    text-align: center;
    margin-top: 30px;
    .btn-download {
      background: linear-gradient(145deg, #e2e8ec, #ffffff);
      box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
      color: #ff014f;
      padding: 18px 35px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      border: 0 none;
      text-transform: uppercase;
      display: inline-block;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        color: #ffffff;
        background: #ff014f;
        transform: translateY(-5px);
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    .about-image {
      width: 40%;
      margin-right: 20px;
    }
    .info-content-wrapper {
      width: 60%;
      text-align: start;
      margin-top: 0;
    }
  }
`;
