import React from 'react';
import styled from 'styled-components';
import { pointDown } from '../../globalStyles';

const Wrapper = styled.div `
  display: grid;
  justify-content: center;
  @media(min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.i `
  color: var(--color-primary);
  animation: ${pointDown} 1.5s ease-in-out infinite;
`;

const ScrollDown = () => (
  <Wrapper>
    <Icon className="fa fa-chevron-down fa-2x" aria-hidden="true" />
  </Wrapper>

);

export default ScrollDown;