import React, { useState } from "react";
import { ContentLayoutStyled, TabStyled, ContentStyled } from "./styles";
import Tab from "./Tab";

import About from "../About";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Blog from "../Blog";
import Contact from "../Contact";

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
    <>
      <ContentLayoutStyled>
        <TabStyled className="lg:w-1/5 lg:mr-7 w-full mr-0 flex lg:justify-start justify-around">
          {TabItems.map(({ id, title }) => (
            <Tab
              key={id}
              title={title}
              onItemClicked={() => setIsActive(id)}
              isActive={isActive === id}
            />
          ))}
        </TabStyled>

        <ContentStyled className="lg:w-4/5 w-full">
          {isActive === TAB_INDEX.aboutTab && <About />}
          {isActive === TAB_INDEX.resumeTab && <Resume />}
          {isActive === TAB_INDEX.blogTab && <Blog />}
          {isActive === TAB_INDEX.portfolioTab && <Portfolio />}
          {isActive === TAB_INDEX.contactTab && <Contact />}
        </ContentStyled>
      </ContentLayoutStyled>
    </>
  );
};

export default Content;
