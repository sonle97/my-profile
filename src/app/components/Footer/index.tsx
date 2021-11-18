import React from "react";
import { FooterStyled } from "./styles";
import image from "../../../assets/img/myImages/footer.jpg";
import { scrollToTop } from "../ButtonScrollOnTop";

const Info = {
  image,
  name: "DEVELOPER",
};

const Footer = () => {
  return (
    <FooterStyled>
      <img src={Info.image} alt="img" onClick={scrollToTop} />
      <div className="font-bold text-gray-1 mt-3 uppercase">{Info.name}</div>
      <div className="mt-6 font-xl">
        © 2021. All rights reserved by{" "}
        <span className="font-bold hover:text-red-3 name">Son Le Quang</span>.
      </div>
    </FooterStyled>
  );
};

export default Footer;
