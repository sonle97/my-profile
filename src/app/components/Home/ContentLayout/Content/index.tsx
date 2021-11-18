import React, { useState } from "react";
import { ContentLayoutStyled, TabStyled, ContentStyled } from "./styles";
import Tab from "./Tab";

interface ContentProps {}

const TAB_INDEX = {
  aboutTab: 1,
  resumeTab: 2,
  portfolioTab: 3,
  blogTab: 4,
  contactTab: 5,
};

const TabItems = [
  {
    id: TAB_INDEX.aboutTab,
    title: "About",
  },
  {
    id: TAB_INDEX.resumeTab,
    title: "Resume",
  },
  {
    id: TAB_INDEX.portfolioTab,
    title: "Portfolio",
  },
  {
    id: TAB_INDEX.blogTab,
    title: "Blog",
  },
  {
    id: TAB_INDEX.contactTab,
    title: "Contact",
  },
];

const Content: React.FC<ContentProps> = () => {
  // State
  const [isActive, setIsActive] = useState(TAB_INDEX.aboutTab);

  return (
    <ContentLayoutStyled>
      <TabStyled className="w-1/4 mr-7">
        {TabItems.map(({ id, title }) => (
          <Tab
            key={id}
            title={title}
            onItemClicked={() => setIsActive(id)}
            isActive={isActive === id}
          />
        ))}
      </TabStyled>
      <ContentStyled className="w-3/4">
        {isActive === TAB_INDEX.aboutTab && <div>TAb A</div>}
        {isActive === TAB_INDEX.resumeTab && <div>TAb B</div>}
      </ContentStyled>
    </ContentLayoutStyled>
  );
};

export default Content;
