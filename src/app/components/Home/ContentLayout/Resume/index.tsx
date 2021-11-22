import React from "react";
import { Tabs } from "antd";

import { ResumeStyled } from "./styles";
import Education from "./Education";
import ProfessionalSkills from "./ProfessionalSkills";
import Experience from "./Experience";

const { TabPane } = Tabs;

interface TabsContentProps {
  key: number;
  name: string;
  component: any;
}

const TabsContent: TabsContentProps[] = [
  {
    key: 1,
    name: "Education",
    component: <Education />,
  },
  {
    key: 2,
    name: "Professional Skills",
    component: <ProfessionalSkills />,
  },
  {
    key: 3,
    name: "Experience",
    component: <Experience />,
  },
];

function Resum() {
  return (
    <ResumeStyled>
      <Tabs defaultActiveKey="1" className="tab-wrapper">
        {TabsContent.map((tab: TabsContentProps) => (
          <TabPane tab={tab.name} key={tab.key}>
            {tab.component}
          </TabPane>
        ))}
      </Tabs>
    </ResumeStyled>
  );
}

export default Resum;
