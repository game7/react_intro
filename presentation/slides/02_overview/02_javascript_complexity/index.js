import React from "react";
import { Slide, Image } from "spectacle";

const image = require('complexity.png')

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Image src={image} />
  </Slide>    
)