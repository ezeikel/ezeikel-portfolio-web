import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 150px;
  grid-template-rows: 25px;
  justify-contents: center;
  @media (min-width: 768px) {
    grid-template-columns: 170px;
    grid-template-rows: 50px;
  }
`;

const List = styled.ul`
  position: relative;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Skill = styled.li`
  position: absolute;
  display: grid;
  place-items: center;
  background-color: var(--color-primary);
  color: var(--color-white);
  width: 100%;
  height: 100%;
`;

class Skills extends Component {
  constructor(props) {
    super(props);

    this.list = React.createRef();
  }

  componentDidMount() {
    this.showSkill();
  }

  showSkill = () => {
    const skills = Array.from(this.list.current.children);
    this.loopSkills(skills);
  }

  loopSkills = (skills, zIndex = 0) => {
    skills.forEach((skill,i) => {
      setTimeout(() => {

        if (i === skills.length -1)  {
          this.loopSkills(skills, zIndex);
        }

        zIndex++;
        skill.style.zIndex = zIndex;
      }, 1000 * i)
    });
  }

  render() {
    const { skills } = this.props;

    return (
      <Wrapper>
        <List innerRef={this.list}> 
          {skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
        </List>
      </Wrapper> 
    )
  }
}

export default Skills;