import styled from 'styled-components';
import { theme } from '../../styles';

const HEIGHT = 2;
const HORIZONTAL_PADDING = 1;
const VERTICAL_PADDING = 0.25;

export const PrimaryButton = styled.button`
  background: ${props => props.danger ? theme.dangerLight : theme.primary};
  border-radius: ${theme.defaultRadius};
  border: 2px solid ${props => props.danger ? theme.dangerLight : theme.primary};
  cursor: pointer;
  color: ${theme.invertedText};
  height: ${HEIGHT}rem;
  padding: ${VERTICAL_PADDING}rem ${HORIZONTAL_PADDING}rem;
  transition: ${theme.shortTransition};

  > svg {
    width: ${HEIGHT - 2 * VERTICAL_PADDING}rem;
    width: ${HEIGHT - 2 * VERTICAL_PADDING}rem;
    fill: currentColor;
  }

  fill: ${theme.invertedIcon};

  &:hover:not([disabled]) {
    background: ${props => props.danger ? theme.dangerLight : theme.primaryDark};
    border: 2px solid ${props => props.danger ? theme.dangerLight : theme.primaryDark};
  }

  &:disabled {
    border: 2px solid ${theme.disabled};
    background: ${theme.disabled};
    color: ${theme.disabled};
    fill: ${theme.primary};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: ${theme.background};
  border: 2px solid ${props => props.danger ? theme.danger : theme.primary};
  color: ${props => props.danger ? theme.danger : theme.primary};
  fill: ${props => props.danger ? theme.danger : theme.primary};

  &:hover:not([disabled])  {
    background: ${props => props.danger ? theme.danger : theme.primary};
    color: ${theme.invertedText};
    fill: ${theme.invertedIcon};
  }

  &:disabled {
    background: ${theme.background};
    border: 2px solid ${theme.disabled};
    cursor: auto;
  }
`;
