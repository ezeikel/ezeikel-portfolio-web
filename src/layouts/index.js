import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from "styled-components";
import Header from '../components/Header/Header';
import '../globalStyles';

const Wrapper = styled.div `
  display: grid;
`;

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header data={data} location={location} />
    <Wrapper>
      {children()}
    </Wrapper>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
