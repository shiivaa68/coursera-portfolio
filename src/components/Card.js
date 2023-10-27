import { Heading, Image, Text } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imgSrc }) => {
  return (
    <div>
      <Image src={imgSrc} width="500px" height="500px"/>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </div>
  );
};
export default Card;
