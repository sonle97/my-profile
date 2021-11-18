import React from "react";
import { InfoContactStyled } from "./styles";
import { informations } from "../data";

interface InfoItemProps {
  title: string;
  text: string;
  className?: string;
}

const InfoItem = ({ title, text, className }: InfoItemProps) => {
  return (
    <div className={`text-gray-2 text-lg my-3 ${className && className}`}>
      <div className="text-sm text-gray-3 uppercase">{title}</div>
      <span className="font-medium">{text}</span>
    </div>
  );
};

const InfoContact = () => {
  return (
    <InfoContactStyled className="flex">
      <div className="md:pl-7 pl-0">
        <InfoItem title="Email" text={informations.email} />
        <InfoItem title="Phone" text={informations.phone} />
      </div>
      <div className="md:pl-7 pl-0">
        <InfoItem title="Birthday" text={informations.birthday} />
        <InfoItem title="Location" text={informations.location} />
      </div>
    </InfoContactStyled>
  );
};

export default InfoContact;
