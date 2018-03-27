import React from "react";
import { Heading, Slide, Text, Image } from "spectacle";

const image = require('../../../../assets/react_home.png')

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Image src={image} />
  </Slide>    
)