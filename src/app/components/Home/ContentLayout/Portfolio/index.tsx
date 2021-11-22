import React from "react";
import ListCard from "../../../ui/ListCard";
import { portfolios } from "../data";

function Portfolio() {
  return <ListCard data={portfolios} isBlog={false} />;
}

export default Portfolio;
