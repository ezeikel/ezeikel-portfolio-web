import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from "styled-components";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../globalStyles';

const Wrapper = styled.div `
  display: grid;
  grid-template-rows: minmax(80px, auto) minmax(auto, 1fr) 80px;
`;

const Main = styled.main`
  min-height: calc(100vh - 120px);
`;

const Intro = styled.div `
  font-size: 51px;
  line-height: 46px;
  font-weight: 900;
  font-family: 'Droid Serif';
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Wrapper>
      <Header data={data} />
      <Main>
        {children()}
      </Main>
      <Footer />
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
