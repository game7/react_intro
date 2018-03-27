// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

// const theme = createTheme({
//   primary: "white",
//   secondary: "black",
//   tertiary: "#03A9FC",
//   quarternary: "#CECECE"
// }, {
//   primary: "Montserrat",
//   secondary: "Helvetica"
// });

const theme = createTheme({
  primary: '#61dafb'
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

// import createTheme from 'spectacle-theme-nova';
// const theme = createTheme();

import intro      from './slides/01_intro';
import overview   from './slides/02_overview';
import ecosystem  from './slides/03_ecosystem';
import code       from './slides/04_code';

export default class Presentation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { slides: [] }
  }

  // componentDidMount() {
  //   Promise.all(importedSlides).then((resolved) => {
  //     const slides = resolved.map(slide => slide.default)
  //     this.setState({ slides })
  //   })
  // }

  render() {
    const slides = [
      ...intro,
      ...overview,
      ...ecosystem,
      ...code
    ]
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <div hasSlideChildren>
          {slides}
        </div>
        {/* <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide> */}
      </Deck>
    );
  }
}
