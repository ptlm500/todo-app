import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../styles';

export const circlePulse = () => keyframes`
0% {
  opacity: 1;
}
50% {
  opacity: 0.5;
}
100%{
  opacity: 1;
}
`;

const StyledIndicator = styled.svg`
  display: inline-block;
  margin: auto;
  width: 12px;
  height: 12px;
`;

const StyledInnerCircle = styled.circle`
  animation: ${props => props.disabled || !props.pulsing ? 'none' :
    css`${circlePulse()} infinite 4s ease-in-out;`};
  fill: ${props => props.disabled ? theme.disabled : props.fill};
  width: 100;
  height: 100;
  transition: ${theme.shortTransition};
`;


export default function Indicator(props) {
  return (
    <StyledIndicator
      viewBox="0 0 100 100"
    >
      <StyledInnerCircle
        cx="50"
        cy="50"
        r="50"
        {...props}
      />
    </StyledIndicator>
  );
}

Indicator.propTypes = {
  disabled: PropTypes.bool,
  fill: PropTypes.string.isRequired,
  pulsing: PropTypes.bool
};
