import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hello there,<br/>
      I am Lami
      </SectionTitle>     
      <SectionText>
        I am a web developer with a knack for solving problems and getting my hands dirty
      </SectionText>
      <Button onClick={() => window.location = "www.google.com"} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;