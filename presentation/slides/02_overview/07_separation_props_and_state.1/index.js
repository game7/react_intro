import React from "react";
import { Slide, Image } from "spectacle";

const image = require('../../../../assets/contraption.jpg')

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <BlockQuote>
      <Quote>Separation of props and state</Quote>
      <Cite>Chris Woodall</Cite>
    </BlockQuote>
  </Slide>    
)