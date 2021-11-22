import React from "react";
import ResumeList from "../ResumeList";
import { EducationStyled } from "./styles";

const Education = () => {
  return (
    <EducationStyled>
      <h4 className="maintitle text-black-3 md:text-3xl text-2xl font-bold mb-5 mt-2">
        Education Quality
      </h4>
      <ResumeList />
    </EducationStyled>
  );
};

export default Education;
