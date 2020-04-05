import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="Eu sou o Gabriel, sou um desenvolvedor Backend/Fulltack!" />
      </Thumbnail>
      <Details>
        <h1>Com o que eu trabalho</h1>
        <ul>
          <li>Java (Backend) e Javascript (Fullstack)</li>
          <li>React e React Native</li>
          <li>MySQL, Oracle, PostgreSQL, mongoDB</li>
        </ul>
        <Button as={AnchorLink} href="#contact">
          Contato
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
