import React from "react";
import FormContact from "./FormContact";
import Informations from "./Informations";

const index = () => {
  return (
    <div className="flex flex-wrap justify-between md:flex-row flex-col">
      <Informations />
      <FormContact />
    </div>
  );
};

export default index;
