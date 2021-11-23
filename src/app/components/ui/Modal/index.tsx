import React from "react";
import { Button } from "antd";
import { ModalStyled } from "./styles";

export interface ModalProps {
  title?: string;
  width?: number;
  children?: any;
  className?: string;
  visible: boolean;
  onClose: () => void;
}

const Modal = ({
  title,
  visible,
  width = 1000,
  children,
  className,
  onClose,
  ...props
}: ModalProps) => {
  function closeModal(): void {
    onClose();
  }

  return (
    <ModalStyled
      title={title || ""}
      centered
      visible={visible}
      onOk={closeModal}
      onCancel={closeModal}
      width={width}
      className={`modal-wrapper ${className && className}`}
      maskClosable={true}
      {...props}
      footer={[
        <Button key="back" onClick={closeModal}>
          Cancel
        </Button>,
      ]}
    >
      {children}
    </ModalStyled>
  );
};

export default Modal;
