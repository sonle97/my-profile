import styled from "@emotion/styled";

export const TimeLineListStyled = styled.div`
  border-left: 5px solid #d9dee2;
  padding-left: 31px;
  .resume-single-list {
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
    padding: 30px 25px;
    position: relative;
    margin-top: 50px;
    border-radius: 6px;
    transition: 0.4s;
    .inner {
      .heading {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e3e9ed;
        padding-bottom: 20px;
        margin-bottom: 20px;
        .title {
          margin-bottom: 15px;
          h4 {
            color: #1e2125;
            margin-bottom: 7px;
            font-weight: 500;
            transition: 0.4s;
          }
          span {
            color: #3c3e41;
            display: block;
            font-size: 14px;
          }
        }
        .date-of-time {
          display: inline-block;
          span {
            background: #ffffff;
            box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
            color: #ff014f;
            display: block;
            font-size: 14px;
            padding: 0 15px;
            height: 36px;
            line-height: 36px;
            border-radius: 6px;
            transition: 0.4s;
            font-weight: 500;
          }
        }
      }
      .description {
        color: #3c3e41;
        font-size: 18px;
        line-height: 28px;
        transition: 0.4s;
      }
      &:before {
        background: #d9dee2;
        position: absolute;
        content: "";
        width: 20px;
        height: 5px;
        right: 100%;
        top: 62px;
        transform: translateY(-7px);
        z-index: 0;
      }
      &:after {
        border: 4px solid #d9dee2;
        background: #ecf0f3;
        position: absolute;
        content: "";
        width: 18px;
        height: 18px;
        border-radius: 100%;
        right: 106%;
        top: 55px;
        transform: translateY(-7px);
        transition: 0.4s;
      }
    }
    &:hover {
      background: linear-gradient(145deg, #ff014f, #d11414);
      .inner {
        .heading {
          border-bottom: 1px solid #ce6e6e;
          .title {
            h4,
            span {
              color: #ffffff;
            }
          }
          .date-of-time {
            span {
              box-shadow: none;
              background: #fe024e;
              color: #ffffff;
            }
          }
        }
        .description {
          color: #ffffff;
        }
        &::after {
          background: #ff014f;
        }
      }
    }
    @media screen and (min-width: 414px) {
      .inner {
        ::after {
          right: 104%;
        }
      }
    }

    @media screen and (min-width: 540px) {
      .inner {
        ::after {
          right: 103%;
        }
      }
    }

    @media screen and (min-width: 768px) {
      .inner {
        ::after {
          right: 102%;
        }
      }
    }
  }
`;
