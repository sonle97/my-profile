import React, { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

import { CardStyled } from "./styles";
import BlogContentModal from "../../Home/ContentLayout/Blog/Modal/BlogContentModal";
import PortfolioContentModal from "../../Home/ContentLayout/Portfolio/Modal/PortfolioContentModal";

interface CardData {
  image: string;
  category: string;
  readedTime?: string;
  liked?: number;
  title: string;
}

interface CardProps {
  card: CardData;
  isBlog: boolean;
}

const Card = ({ card, isBlog }: CardProps) => {
  const [visibleBlogModal, setVisibleBlogModal] = useState(false);
  const [visiblePortfolioModal, setVisiblePortfolioModal] = useState(false);

  function openModal(): void {
    if (isBlog) {
      setVisibleBlogModal(true);
    } else {
      setVisiblePortfolioModal(true);
    }
  }

  return (
    <>
      <CardStyled onClick={openModal}>
        <div className="thumbnail">
          <img src={card.image} alt="img" />
        </div>
        <div className="flex items-center justify-between mt-5 font-medium">
          <div className="uppercase text-red-3 text-xs tracking-widest">
            {card.category}
          </div>
          {isBlog ? (
            <div className="text-gray-1 text-sm flex items-center">
              <IoMdTime className="mr-1 text-gray-1" />
              {card.readedTime} read
            </div>
          ) : (
            <div className="text-gray-1 text-sm flex items-center">
              <FaRegHeart
                className="mr-2 text-gray-1 cursor-pointer"
                size={16}
              />
              {card.liked}
            </div>
          )}
        </div>
        <div className="title">
          <span>{card.title}</span>
          <FiArrowUpRight className="icon text-red-3 ml-1" />
        </div>
      </CardStyled>
      <BlogContentModal
        visible={visibleBlogModal && isBlog}
        onClose={() => setVisibleBlogModal(false)}
        data={card}
      />

      <PortfolioContentModal
        visible={visiblePortfolioModal && !isBlog}
        onClose={() => setVisiblePortfolioModal(false)}
        data={card}
        width={1200}
      />
    </>
  );
};

export default Card;
