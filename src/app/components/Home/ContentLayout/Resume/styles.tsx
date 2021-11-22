import styled from "@emotion/styled";

export const ResumeStyled = styled.div`
  .tab-wrapper {
    .ant-tabs-ink-bar {
      background: #ff014f;
    }
    .ant-tabs-tab {
      .ant-tabs-tab-btn {
        font-size: 16px;
        font-weight: 500;
        &:hover {
          color: #ff014f;
        }
      }
      &.ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          color: #ff014f;
        }
      }
    }
  }
`;
