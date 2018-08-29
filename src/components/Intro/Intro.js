import React from 'react';
import styled from 'styled-components';
import Skills from '../Skills/Skills';
import SocialLinks from '../SociaLinks/SocialLinks';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import ScrollDown from '../ScrollDown/ScrollDown';

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  grid-row-gap: var(--spacing-medium);
  height: 100%;
  padding: var(--spacing-large);
  color: var(--color-black);
`;

const Name = styled.h1`
  font-size: var(--h1-font-size);
  text-align: center;
`;

const Title = styled.h5`
  color: var(--color-primary);
  font-weight: var(--font-weight);
`;

const Intro = ({ data: { name, title, skills, paragraphs, experience } }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Title>{title}</Title>
    <Skills skills={skills}/>
    <SocialLinks />
    <ScrollDown />
    <div>{paragraphs.map((paragraph,index) => <p key={index}>{paragraph}</p>)}</div>
    <Experience  experience={experience} />
    <Projects experience={experience} />
  </Wrapper>
);

export default Intro;