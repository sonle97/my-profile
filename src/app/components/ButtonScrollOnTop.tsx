import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FaAngleDoubleUp } from "react-icons/fa";

const ButtonScrollOnTopStyled = styled.div`
  background: linear-gradient(145deg, #e2e8ec73, #ffffff);
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 12px;
  right: 20px;
  border-radius: 50%;
  transition: 0.4s;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 99;
  &:hover {
    background: #f1073d;
    .icon-double-up {
      color: #ffffff;
    }
  }
  .icon-double-up {
    font-size: 20px;
    color: #f1073d;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ButtonScrollOnTop = () => {
  const hasWindow = typeof window !== "undefined";
  const [visible, setVisible] = useState(false);

  const handleElementsOnScroll = () => {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  };

  useEffect(() => {
    if (hasWindow) {
      handleElementsOnScroll();
    }
  }, [hasWindow]);

  return (
    <ButtonScrollOnTopStyled
      className={visible ? "flex" : "hidden"}
      onClick={scrollToTop}
    >
      <FaAngleDoubleUp className="icon-double-up" />
    </ButtonScrollOnTopStyled>
  );
};

export default ButtonScrollOnTop;
