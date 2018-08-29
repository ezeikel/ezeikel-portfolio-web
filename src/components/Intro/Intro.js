import React, { Component } from 'react';
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

const Title = styled.h3`
  color: var(--color-primary);
  font-weight: var(--font-weight);
  text-align: center;
`;

const Availablity = styled.span`
  padding: var(--spacing-tiny);
  color:var(--color-white);
  background-color: var(${props => props.available ? `--color-available` : `--color-unavailable`});
`;


class Intro extends Component {
  render() {
    const { data: { name, title, skills, paragraphs, availability, experience } } = this.props;

    const [day, month, year] = availability.date.split('/');
    const availableDate = new Date(year, month -1, day);
    const today = new Date();

    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    const available = availableDate <= today ? 
      <span><Availablity availability={available}>available</Availablity> for new contracts.</span> :
      <span><Availablity availability={available}>unavailable</Availablity> for new contracts until {availableDate.toLocaleDateString('en-GB', options)}</span>;

    return (
      <Wrapper>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Skills skills={skills}/>
        <SocialLinks />
        <ScrollDown />
        <div>{paragraphs.map((paragraph,index) => <p key={index}>{paragraph} {index === paragraphs.length -1 ? available : null}</p>)} </div>
        <Experience  experience={experience} />
        <Projects experience={experience} />
      </Wrapper>
    );
  }
}

export default Intro;