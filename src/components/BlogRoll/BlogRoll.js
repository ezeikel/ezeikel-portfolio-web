import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: var(--spacing-large);
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: var(--spacing-huge);
  background-color: var(--color-primary);
  color: var(--color-white);
  a {
    color: var(--color-white);
  }
`;

const Title = styled.h1`
  diplay: grid;
  place-items: center;
  text-align: center;
`;

const List = styled.ul`
  display: grid;
  grid-row-gap: var(--spacing-large);
`;

const ListItem = styled.li`
  display: grid;
  grid-gap: var(--spacing-tiny);
`;

const ListItemTitle = styled.h2`
  position: relative;
  padding-bottom: var(--spacing-small);
  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 80px;
    background-color: var(--color-white);
  }
`;

const ListItemDate = styled.span`
  font-size: 16px;
`;

const BlogRoll = ({ posts }) => (
  <Wrapper>
    <Title>Posts</Title>
    <div>
      <List>
        {posts.map(post => (
          <ListItem key={post.node.id}>
            <ListItemDate>{post.node.frontmatter.date}</ListItemDate>
            <ListItemTitle><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></ListItemTitle>
            <span>{post.node.frontmatter.author}</span>
          </ListItem>
        ))}
      </List>
    </div>
  </Wrapper>
);

export default BlogRoll;