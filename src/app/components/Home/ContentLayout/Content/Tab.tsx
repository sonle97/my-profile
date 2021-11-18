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
      className={`
        flex items-center items-center p-4 cursor-pointer mb-1 justify-center
        font-medium hover:bg-red-3 hover:text-white rounded-xl text-lg	${
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
