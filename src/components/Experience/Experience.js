import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: grid;
  grid-column-gap: var(--spacing-medium);
`;

const Experience = ({ experience: { companies } }) => (
  <Wrapper>
    <h4>Experience</h4>
    <ul>
      {companies.map((company, index) => (
        <li key={index}>
          <ul>
            <li><a href={company.url}>{company.name}</a></li>
            <li>{company.role}</li>
          </ul>
        </li>
      ))}
    </ul>
  </Wrapper>
);

export default Experience;