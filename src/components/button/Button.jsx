import styled from 'styled-components';
import { theme } from '../../styles';

const HEIGHT = 2;
const HORIZONTAL_PADDING = 1;
const VERTICAL_PADDING = 0.25;

export const PrimaryButton = styled.button`
  background: ${props => props.danger ? theme.colour.dangerLight : theme.colour.primary};
  border-radius: ${theme.defaultRadius};
  border: 2px solid ${props => props.danger ? theme.colour.dangerLight : theme.colour.primary};
  cursor: pointer;
  color: ${theme.colour.invertedText};
  height: ${HEIGHT}rem;
  padding: ${VERTICAL_PADDING}rem ${HORIZONTAL_PADDING}rem;
  transition: ${theme.transition.short};

  > svg {
    width: ${HEIGHT - 2 * VERTICAL_PADDING}rem;
    width: ${HEIGHT - 2 * VERTICAL_PADDING}rem;
    fill: currentColor;
  }

  fill: ${theme.colour.invertedIcon};

  &:hover:not([disabled]) {
    background: ${props => props.danger ? theme.colour.dangerLight : theme.colour.primaryDark};
    border: 2px solid ${props => props.danger ? theme.colour.dangerLight : theme.colour.primaryDark};
  }

  &:disabled {
    border: 2px solid ${theme.colour.disabled};
    background: ${theme.colour.disabled};
    color: ${theme.colour.disabled};
    fill: ${theme.colour.primary};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: ${theme.colour.background};
  border: 2px solid ${props => props.danger ? theme.colour.danger : theme.colour.primary};
  color: ${props => props.danger ? theme.colour.danger : theme.colour.primary};
  fill: ${props => props.danger ? theme.colour.danger : theme.colour.primary};

  &:hover:not([disabled])  {
    background: ${props => props.danger ? theme.colour.danger : theme.colour.primary};
    color: ${theme.colour.invertedText};
    fill: ${theme.colour.invertedIcon};
  }

  &:disabled {
    background: ${theme.colour.background};
    border: 2px solid ${theme.colour.disabled};
    cursor: auto;
  }
`;
