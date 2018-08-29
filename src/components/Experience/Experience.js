import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  width: 100%;
  display: grid;
  grid-row-gap: var(--spacing-medium);
`;

const List = styled.ul`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  margin-bottom: 0;
`;

const CompanyName = styled.li`
  position: relative;
  display: inline-block;
  padding-bottom: var(--spacing-tiny);
  margin-bottom: var(--spacing-tiny);
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 100%;
    background-color: var(--color-primary)  
  }
`;

const Experience = ({ experience: { companies } }) => (
  <Wrapper>
    <h4>Experience</h4>
    <List>
      {companies.map((company, index) => (
        <li key={index}>
          <ul>
            <CompanyName><a href={company.url}>{company.name}</a></CompanyName>
            <li>{company.role}</li>
          </ul>
        </li>
      ))}
    </List>
  </Wrapper>
);

export default Experience;