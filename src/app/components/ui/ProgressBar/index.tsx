import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { ProgressBarStyled } from "./styles";

const Progress = ({ data }: any) => {
  return (
    <ProgressBarStyled>
      <div className="text-sm font-medium text-black-3 mb-3 opacity-90 tracking-widest uppercase">
        {data.skill}
      </div>
      <ProgressBar
        completed={data.completed}
        maxCompleted={100}
        baseBgColor="#dce1e4"
        labelColor="#ffffff"
        transitionDuration="10"
        animateOnRender
        className="progress-bar"
        height="16px"
        labelSize="14px"
      />
    </ProgressBarStyled>
  );
};

export default Progress;
