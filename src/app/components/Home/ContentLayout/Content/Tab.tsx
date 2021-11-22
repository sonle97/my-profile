import React from "react";

interface TabIndexProps {
  title: string;
  isActive: boolean;
  className?: string;
  onItemClicked: () => void;
}

const Tab: React.FC<TabIndexProps> = (props) => {
  const { title, isActive, className, onItemClicked } = props;

  return (
    <div
      onClick={onItemClicked}
      className={`tab-item leading-none
        flex items-center items-center py-4 md:px-8 px-5 cursor-pointer lg:mb-1 mb-0 lg:mr-0 mr-1 
        justify-center font-medium hover:bg-red-3 hover:text-white rounded-xl md:text-lg text-sm ${
          className ? className : ""
        }
        ${isActive && "pointer-events-none text-white bg-red-3"}
      `}
    >
      <div className="font-medium">{title}</div>
    </div>
  );
};

export default Tab;
