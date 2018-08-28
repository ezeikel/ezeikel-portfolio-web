import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 150px;
  grid-template-rows: 25px;
  justify-contents: center;
`;

const List = styled.ul`
  display: grid;
  height: 100%;
`;

const Skill = styled.li`
  position: relative;
  height: 100%;
  margin-bottom: 0;
`;

const Skills = ({ skills }) => (
 <Wrapper>
   <List> 
    {skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
   </List>
 </Wrapper>
);

export default Skills;