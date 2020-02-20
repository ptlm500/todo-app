import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles';

export const load = () => keyframes`
    0% {
      opacity: 0.5;
      height: 20%;
    }
    50% {
      opacity: 1;
      height: 100%;
    }
    100% {
      opacity: 0.5;
      height: 20%;
    }
`;

export default function Loading({size}) {
  return (
    <LoadingWrapper size={size}>
      <div />
      <div />
      <div />
      <div />
    </LoadingWrapper>
  );
}

Loading.propTypes = {
  size: PropTypes.number
};

const defaultSize = 120;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.size || defaultSize}px;
  height: ${props => props.size || defaultSize}px;

  > div {
    background: ${theme.colour.primary};
    width: 20%;
    height: 20%;
    border-radius: ${theme.defaultRadius};
    animation: ${load()} 2s ease-in-out infinite;
    opacity: 0.1;
  }

  > div:nth-child(1) {
    animation-delay: -1.5s;
  }

  > div:nth-child(2) {
    animation-delay: -1s;
  }

  > div:nth-child(3) {
    animation-delay: -0.5s;
  }

  > div:nth-child(4) {
    animation-delay: 0s;
  }
`;
