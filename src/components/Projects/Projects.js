import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: grid;
  grid-column-gap: var(--spacing-medium);
`;

const Projects = ({ experience: { projects } }) => (
  <Wrapper>
    <h4>Projects</h4>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <ul>
            <li><a href={project.url}>{project.name}</a></li>
            <li>{project.tech}</li>
            <li>
              <a href={project.repoUrl}>
                Repo
                <i className="fa fa-code-fork" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href={project.demoUrl}>
                Demo
                <i className="fa fa-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  </Wrapper>
);

export default Projects;