import React from 'react'
//import Img from 'gatsby-image';
//import PostListing from '../components/Posts/PostListing';
import styled from 'styled-components';
import Intro from '../components/Intro/Intro';
import BlogRoll from '../components/BlogRoll/BlogRoll';

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const IndexPage = ({ data }) => (
  <Wrapper>
    <Intro data={data.site.siteMetadata.intro} />
    <BlogRoll posts={data.allMarkdownRemark.edges} />
    {/* <Img style={{
      width: '300px',
      height: '300px'w
      
    }}
      sizes={data.avatar.sizes} 
    /> */}
    {/* {data.allMarkdownRemark.edges.map(({node}) => <PostListing key={node.id} post={node} />)} */}
  </Wrapper>
);

export default IndexPage;

export const query = graphql `
  query Index {
    site {
      siteMetadata {
        title
        intro {
          name
          title
          skills
          paragraphs
          experience {
            companies {
              name
              role
              url
            }
            projects {
              name
              tech
              repoUrl
              demoUrl
            }
          }
        }
      }
    }
    avatar: imageSharp(id: {regex: "/avatar.jpg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
            author
          }
          fields {
            slug
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;
