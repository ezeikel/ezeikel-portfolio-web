import React, { Component } from 'react';

class PostPage extends Component {
  render() {
    const { data } = this.props;

    if (!data) return null; // TODO: Fixes image in post taking too long to load

    return (
      <div>
        <img src={data.markdownRemark.frontmatter.image} />
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <div 
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
        />
      </div>
    );
  }
}

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        image
      }
    }
  }
`;