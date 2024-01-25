import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default function CardFood({ item }) {
  return (
    <Card>
      <img alt="Card cap" src={item.img} />
      <CardBody>
        <CardTitle tag="h5">{item.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Price : $ {item.price}
        </CardSubtitle>
      </CardBody>
      <CardBody>
        <CardText>{item.dsc}</CardText>
      </CardBody>
    </Card>
  );
}
