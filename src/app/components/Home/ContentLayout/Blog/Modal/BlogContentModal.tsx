import React from "react";
import { FaRegHeart } from "react-icons/fa";
import renderHTML from "react-render-html";

import { ModalProps } from "../../../../ui/Modal";
import { ModalBlogStyled } from "./styles";

interface BlogContentModalProps extends ModalProps {
  data: any;
}

const BlogContentModal = (props: BlogContentModalProps) => {
  const { data } = props;

  return (
    <ModalBlogStyled {...props}>
      <div className="w-full">
        <img
          src={data.image}
          alt="img_blog"
          className="mx-auto w-full img_blog"
        />
        <div className="flex items-center justify-between">
          <div className="text-gray-1 text base font-medium mb-2">
            {data.created}
          </div>
          {data.liked && (
            <div className="text-gray-1 text-base flex items-center">
              <FaRegHeart
                className="mr-2 text-gray-1 cursor-pointer"
                size={20}
              />
              {data.liked}
            </div>
          )}
        </div>
        <div className="text-black-3 md:text-3xl text-2xl mb-6 font-bold">
          {data.title}
        </div>
        <div className="text-base text-gray-1 font-normal">
          {renderHTML(data.content)}
        </div>
      </div>
    </ModalBlogStyled>
  );
};

export default BlogContentModal;
