import React from "react";
import ListCard from "../../../ui/ListCard";
import { blogs } from "../data";

function Blog() {
  return <ListCard data={blogs} />;
}

export default Blog;
