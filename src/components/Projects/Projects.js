import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: grid;
  grid-row-gap: var(--spacing-medium);
`;

const List = styled.ul`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  margin-bottom: 0;
`;

const ProjectName = styled.li`
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

const Projects = ({ experience: { projects } }) => (
  <Wrapper>
    <h4>Personal Projects</h4>
    <List>
      {projects.map((project, index) => (
        <li key={index}>
          <ul>
            <ProjectName><a href={project.url}>{project.name}</a></ProjectName>
            <li>{project.tech}</li>
            <li>
              <a href={project.repoUrl}>
                Repo <i className="fa fa-code-fork" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href={project.demoUrl}>
                Demo <i className="fa fa-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </li>
      ))}
    </List>
  </Wrapper>
);

export default Projects;