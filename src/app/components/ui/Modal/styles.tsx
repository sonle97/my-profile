import styled from "@emotion/styled";
import { Modal } from "antd";

export const ModalStyled = styled(Modal)`
  &.modal-wrapper {
    .ant-modal-content {
      margin: 30px 15px 10px;
      background: linear-gradient(145deg, #e2e8ec, #ffffff);
      padding: 30px 0px 0px;
      border-radius: 10px;
      overflow: hidden;
      border: none;
      .ant-modal-body {
        padding: 30px 20px 20px;
      }
      .ant-modal-close {
        .ant-modal-close-icon {
          border: 1px solid;
          padding: 7px;
          border-radius: 50%;
          transition: all 0.3s;
          svg {
            transition: all 0.3s;
            font-size: 13px;
          }
          &:hover {
            background-color: #ff014f;
            border: none;
            svg {
              color: #ffffff;
            }
          }
        }
      }
      .ant-modal-footer {
        padding: 10px 20px;
        .ant-btn {
          border-radius: 7px;
          font-weight: 500;
          color: #3c3e41;
          &:hover {
            color: #ff014f;
            border-color: #ff014f;
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    &.modal-wrapper {
      .ant-modal-content {
        margin: 60px 15px;
        padding: 30px 20px 0px;
      }
    }
  }
`;
