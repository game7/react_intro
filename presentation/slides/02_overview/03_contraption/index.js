import React from "react";
import { Slide, Image } from "spectacle";

const image = require('../../../../assets/contraption.jpg')

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Image src={image} />
  </Slide>    
)