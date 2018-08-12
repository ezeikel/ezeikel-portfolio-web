import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

const Wrapper = styled.header`
  display: grid;
  background-color: tomato;
  padding: 32px;
  font-size: 32px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <StyledLink to="/">{siteTitle}</StyledLink>
  </Wrapper>
);

export default Header
