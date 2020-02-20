import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../styles';

export const Card = styled.div`
  background: ${theme.colour.primaryLight};
  border-radius: ${theme.defaultRadius};
  padding: 1rem;

  &.card-transition-enter {
    opacity: 0.01;
    transform: scaleX(0) scaleY(0);
  }

  &.card-transition-enter-active {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
    transition: ${200}ms ease-out;
  }

  &.card-transition-appear {
    opacity: 0.01;
    transform: scaleX(0) scaleY(0);
  }

  &.card-transition-appear-active {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
    transition: ${200}ms ease-out;
  }
`;

export const AnimatedCard = styled(Card)`
  &.${props => props.animationClass}-enter {
    opacity: 0.01;
    transform: scaleX(0) scaleY(0);
  }

  &.${props => props.animationClass}-enter-active {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
    transition: ${props => props.timeout}ms ease-out;
  }

  &.${props => props.animationClass}-appear {
    opacity: 0.01;
    transform: scaleX(0) scaleY(0);
  }

  &.${props => props.animationClass}-appear-active {
    opacity: 1;
    transform: scaleX(1) scaleY(1);
    transition: ${props => props.timeout}ms ease-out;
  }
`;

AnimatedCard.propTypes = {
  animationClass: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired
};
