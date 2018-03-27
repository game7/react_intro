import React from "react";
import { Heading, Slide, Text, CodePane } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <CodePane
      lang="jsx"
      source={require('raw-loader!./code.example')}
      margin="20px auto"
      overflow = "overflow"
      style={{fontSize: '.5em'}}
    />
  </Slide>  
)  