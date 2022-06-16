import React from 'react';
import { DiFirebase, DiIllustrator, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiAdobexd } from 'react-icons/si';

const Technologies = () =>  (
  <Section id='#tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I use a variety of web development technlogies from frontend to backend stacks that emphasizes web accessibilities 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        < SiAdobexd size='3rem' />
        <ListContainer>
          <ListTitle>UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma (StoryBoarding and Prototyping)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
