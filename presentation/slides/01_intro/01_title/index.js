import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      Hello React
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
      an introduction to react
    </Text>
  </Slide>    
)