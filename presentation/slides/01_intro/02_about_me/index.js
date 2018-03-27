import React from "react";
import { Heading, Slide, Layout, Image, Fill } from "spectacle";

const hb_logo = require('../../../../assets/hb_logo.jpg');
const asu_logo = require('../../../../assets/asu_sparky.gif');
const intel_logo = require('../../../../assets/intel_logo.png');

export default (
  <Slide transition={["zoom"]} bgColor="primary">
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      About Me
    </Heading>
    <Layout>
      <Fill>
        <Image src={hb_logo} />
      </Fill>
      <Fill>
        <Image src={asu_logo} />
      </Fill>
      <Fill>
        <Image src={intel_logo} />
      </Fill>      
    </Layout>    
  </Slide>    
)