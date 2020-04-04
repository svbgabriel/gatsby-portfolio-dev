import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Olá!</h1>
        <h4>Eu sou o Gabriel, sou um desenvolvedor Backend/Fulltack!</h4>
        <Button as={AnchorLink} href="#contact">
          Contato
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="Eu sou o Gabriel, sou um desenvolvedor Backend/Fulltack!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
