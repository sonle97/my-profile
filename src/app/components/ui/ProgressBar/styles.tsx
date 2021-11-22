import styled from "@emotion/styled";

export const ProgressBarStyled = styled.div`
  margin-bottom: 25px;
  .progress-bar {
    & > div > div {
      background: linear-gradient(
        145deg,
        rgb(255 185 198) 0%,
        rgb(255, 1, 79) 100%
      ) !important;
      & > span {
        font-size: 14px;
      }
    }
  }
  &:last-child {
    margin-bottom: 10px;
  }
`;
