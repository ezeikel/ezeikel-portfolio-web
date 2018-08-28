import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: flex;
  justify-content: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: var(--primary-text-color);
  & + fa {
    margin-left: var(--spacing-medium);
  }
`;

const SocialLinks = () => (
  <Wrapper>
    <a href="http://www.github.com/ezeikel"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
    <a href="https://uk.linkedin.com/in/ezeikel-pemberton-5bb53728"><i className="about-me__social-link fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
    <a href="http://www.twitter.com/ezeikel_"><i className="about-me__social-link fa fa-twitter fa-2x" aria-hidden="true"></i></a>
  </Wrapper>
);

export default SocialLinks;
