import React from "react";
import renderHTML from "react-render-html";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { ModalProps } from "../../../../ui/Modal";
import { Button, ModalPortfolioStyled } from "./styles";

interface BlogContentModalProps extends ModalProps {
  data: any;
}

const ModalPortfolio = (props: BlogContentModalProps) => {
  const { data } = props;

  return (
    <ModalPortfolioStyled {...props}>
      <div className="w-full flex mdx:items-start mdx:flex-row flex-col items-center">
        <img
          src={data.image}
          alt="img_blog"
          className="img_portfolio mdx:w-1/2 w-full mr-6 mb-6 mx-auto"
        />
        <div className=" mdx:w-1/2 w-full">
          <div className="text-red-3 text-base font-medium">
            {data.category}
          </div>
          <div className="text-black-3 md:text-3xl text-2xl mt-2.5 mb-6 font-bold">
            {data.title}
          </div>
          <div className="text-base text-gray-1 font-normal">
            {renderHTML(data.content)}
          </div>
          <div className="flex items-center mt-8">
            <Button className="xs:mr-8 mr-4 flex items-center">
              LIKE THIS <AiOutlineLike className="text-red-3 ml-1" size={18} />
            </Button>
            <Button className="flex items-center">
              VIEW PROJECT{" "}
              <MdOutlineKeyboardArrowRight className="text-red-3" size={22} />
            </Button>
          </div>
        </div>
      </div>
    </ModalPortfolioStyled>
  );
};

export default ModalPortfolio;
