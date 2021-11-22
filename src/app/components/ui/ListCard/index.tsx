import React from "react";
import { ListCardStyled, Button } from "./styles";
import Card from "./Card";

interface ListCardProps {
  data: any;
  isBlog?: boolean;
}

function ListCard({ data, isBlog = true }: ListCardProps) {
  return (
    <div className="text-center">
      <ListCardStyled>
        {data.map((item: any, idx: number) => (
          <Card card={item} key={idx} isBlog={isBlog} />
        ))}
      </ListCardStyled>
      <Button className="mt-4">See More</Button>
    </div>
  );
}

export default ListCard;
