import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: grid;
  height: 100%;
  background-color: var(--color-primary);
  color: var(--color-white);
  a {
    color: var(--color-white);
  }
`;

const BlogRoll = ({ posts }) => (
  <Wrapper>
    <h4>Posts</h4>
    <ul>
      {posts.map(post => (
        <li key={post.node.id}>
          <span>{post.node.frontmatter.date}</span>
          <h2><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></h2>
          <span>{post.node.frontmatter.author}</span>
        </li>
      ))}
    </ul>
  </Wrapper>
);

export default BlogRoll;