import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from "styled-components";

const Wrapper = styled.header`
  display: grid;
  font-size: 18px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    grid-template-columns: 80px auto 1fr;
    grid-column-gap: var(--spacing-medium);
    align-items: center;
    padding: 20px;
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
  height: 100%;
  display: grid;
  place-items: end;
  padding: 0 var(--spacing-tiny) var(--spacing-tiny) 0;
  background-color: var(--color-yellow);
  font-size: 28px;
  font-weight: 900;
  color: var(--color-black);
  text-decoration: none;
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
        <Initial to="/">EP</Initial>
        <Name to="/">Ezeikel Pemberton</Name>
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
