import React from 'react'
import Img from 'gatsby-image';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <Img style={{
      width: '300px',
      height: '300px'
    }}
      sizes={data.avatar.sizes} 
    />
    {data.allMarkdownRemark.edges.map(({node}) => <PostListing key={node.id} post={node} />)}
  </div>
);

export default IndexPage;

export const query = graphql `
  query Index {
    site {
      siteMetadata {
        title
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

