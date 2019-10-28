import React from "react";
import { Card, CardText, CardTitle, CardBody } from "reactstrap";

const CharacterCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Name: {props.person.name}</CardTitle>
          <CardText>Gender: {props.person.gender}</CardText>
          <CardText>Eye Color: {props.person.eye_color}</CardText>
          <CardText>Hair Color: {props.person.hair_color}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharacterCard;
