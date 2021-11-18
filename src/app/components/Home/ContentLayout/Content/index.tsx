import React, { useState } from "react";
import { ContentLayoutStyled, TabStyled, ContentStyled } from "./styles";
import Tab from "./Tab";

import About from "../About";

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
      <TabStyled className="lg:w-1/4 lg:mr-7 w-full mr-0 flex lg:justify-start justify-around">
        {TabItems.map(({ id, title }) => (
          <Tab
            key={id}
            title={title}
            onItemClicked={() => setIsActive(id)}
            isActive={isActive === id}
          />
        ))}
      </TabStyled>
      <ContentStyled className="lg:w-3/4 w-full">
        {isActive === TAB_INDEX.aboutTab && <About />}
        {isActive === TAB_INDEX.resumeTab && <div>TAb B</div>}
      </ContentStyled>
    </ContentLayoutStyled>
  );
};

export default Content;
