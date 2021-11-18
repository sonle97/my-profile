import styled from "@emotion/styled";

export const WhatIamDoingStyled = styled.div`
  text-align: center;
  margin-top: 50px;
  .doing-wrapper {
    .item {
      width: 100%;
      text-align: center;
      padding: 18px;
      border-radius: 13px;
      border: 1px solid #00000040;
      &:nth-child(2n-1) {
        margin-right: 0px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .doing-wrapper {
      .item {
        width: calc((100% / 2) - 10px);
        padding: 25px 20px;
        &:nth-child(2n-1) {
          margin-right: 20px;
        }
      }
    }
  }
`;
