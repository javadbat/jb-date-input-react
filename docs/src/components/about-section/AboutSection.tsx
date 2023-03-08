import React from 'react';
import { AboutSectionWrapper, AboutTitle, Description } from './styled';

function AboutSection() {
  return (
    <AboutSectionWrapper>
      <AboutTitle>About</AboutTitle>
      <Description>this component is the ReactJS superset for orginal <a href="https://www.npmjs.com/package/jb-date-input"></a>jb-date-input web component that let you use it in Reactjs.</Description>
    </AboutSectionWrapper>
  );
}

export default AboutSection;