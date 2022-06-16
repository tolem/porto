import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section>
  <SectionDivider />
  <SectionTitle main> Projects </SectionTitle>
  <GridContainer>
    {projects.map(({title, description, image, tags, source,visit, id}) => (
      <BlogCard key={id}>
        <Img src={image} />
        <TitleContent> 
          <HeaderThree title={title}>
          </HeaderThree> 
          <Hr/>
          <CardInfo> {description}</CardInfo>
        </TitleContent>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {tags.map((tags,i) => (<Tag key={i}>{tags}</Tag>) )}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={visit}>Code</ExternalLinks>
          <ExternalLinks href={source}>Source</ExternalLinks>
        </UtilityList>
      </BlogCard>
    ))}
  </GridContainer>
  </Section>
);

export default Projects;