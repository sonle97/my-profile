import React from "react";
import { TimeLineListStyled } from "./styles";

const Card = () => {
  return (
    <div className="resume-single-list">
      <div className="inner">
        <div className="heading sm:flex-row flex-col sm:items-center items-start">
          <div className="title">
            <h4 className="md:text-2xl text-xl">
              Personal Portfolio April Fools
            </h4>
            <span>University of DVI (1997 - 2001)</span>
          </div>
          <div className="date-of-time">
            <span>4.30/5</span>
          </div>
        </div>
        <p className="description">
          The education should be very interactual. Ut tincidunt est ac dolor
          aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
          lobortis mauris hendrerit ante.
        </p>
      </div>
    </div>
  );
};

const ResumeList = () => {
  return (
    <TimeLineListStyled>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </TimeLineListStyled>
  );
};

export default ResumeList;
