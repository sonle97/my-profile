import React from "react";

import { ProfessionalSkillsStyled } from "./styles";
import ProgressBar from "../../../../ui/ProgressBar";
import { professionalSkills } from "../../data";

const ProfessionalSkills = () => {
  return (
    <ProfessionalSkillsStyled>
      <h4 className="maintitle text-black-3 md:text-3xl text-2xl font-bold mb-5 mt-2">
        Development Skill
      </h4>
      {professionalSkills &&
        professionalSkills.map((item: any, idx: number) => (
          <ProgressBar data={item} key={idx} />
        ))}
    </ProfessionalSkillsStyled>
  );
};

export default ProfessionalSkills;
