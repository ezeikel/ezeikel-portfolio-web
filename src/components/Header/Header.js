import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from "styled-components";

const Wrapper = styled.header`
  display: grid;
  background-color: #1abc9c;
  margin-bottom: 1.45rem;
  height: ${({ isHome }) => isHome ? '70vh' : '20vh'};
  padding: 32px;
  font-size: 32px;
`;

class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      if (location.pathname === '/') {
        this.wrapper.animate([
          { height: '20vh'},
          { height: '70vh'},
        ], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iteration: 1
        });
      } else if (prevProps.location.pathname === '/') {
        this.wrapper.animate([
          { height: '70vh'},
          { height: '20vh'},
        ], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1
        });
      }
    };
  }

  render() {
    const { data, location } = this.props;
    console.log({location});
    return (
      <Wrapper 
        isHome={location.pathname === '/'}
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
      >
        <Link to="/">Home</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/talks">Talks</Link>
        <Link to="/podcasts">Podcasts</Link>
        <Link to="/writings">Writings</Link>
      </Wrapper>
    );
  }
}

export default Header;
