import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { TiSocialLinkedin, TiMail, TiSocialGithub } from 'react-icons/ti';
import { Wrapper, Details, Thumbnail } from './styles';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <p>Como entrar em contato</p>
      <ul>
        <li>
          <a href="mailto:svbgabriel@gmail.com">
            <TiMail size={32} /> E-mail
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabriel-de-souza-vieira-batista-6b842296/">
            <TiSocialLinkedin size={32} /> Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/svbgabriel">
            <TiSocialGithub size={32} /> Github
          </a>
        </li>
      </ul>
    </Details>
    <Thumbnail>
      <img src={contact} alt="Eu sou o Gabriel, sou um desenvolvedor Backend/Fullstack!" />
    </Thumbnail>
  </Wrapper>
);
