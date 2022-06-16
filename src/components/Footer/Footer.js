import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:838-900-9957'>838-900-9957</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:lamideolowoniyi@outlook.com'>Contact me</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Moving Forward</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://gmail.com'>
            <AiFillMail size='3rem' />
          </SocialIcons>
       </SocialContainer>
    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
