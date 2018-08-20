import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from "styled-components";

const Wrapper = styled.header`
  display: grid;
  max-height: 60px;
  font-size: 18px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 60px auto 1fr;
    grid-column-gap: var(--spacing-medium);
    align-items: center;
    padding: 20px 20px 0 20px;
  }
  @media (min-width: 1024px) {
    padding: 40px 40px 0 40px;
  }
`;

const Navigation = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
    justify-self: end;
  }
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    li {
      margin-left: var(--spacing-large);
    }
  }
  a {
    text-decoration: none;
    color: var(--color-black);
    font-weight: 700;
  }
`;

const Initial = styled(Link)`
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-decoration: none;
  background-color: var(--color-primary);
  text-align: center;
  color: var(--color-white);
`;

const Name = styled(Link)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    color: var(--color-black);
    text-decoration: none;
    font-weight: 700;
  }
`;

class Header extends Component {
  render() {
    const { data } = this.props;
    return (
      <Wrapper 
        isHome={location.pathname === '/'}
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
      >
        <Initial to="/">E</Initial>
        <Name to="/">Ezeikel</Name>
        <Navigation>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/talks">Talks</Link></li>
            <li><Link to="/podcasts">Podcasts</Link></li>
            <li><Link to="/writings">Writings</Link></li>
          </ul>
        </Navigation>
      </Wrapper>
    );
  }
}

export default Header;
