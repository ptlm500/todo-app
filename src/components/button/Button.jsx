import styled from 'styled-components';
import { theme } from '../../styles';

export const PrimaryButton = styled.button`
  background: ${props => props.danger ? theme.danger : theme.primary};
  border-radius: ${theme.defaultRadius};
  border: 2px solid ${props => props.danger ? theme.danger : theme.primary};
  cursor: pointer;
  color: ${theme.invertedText};
  height: 2rem;
  padding: 0.25rem 1rem;
  transition: ${theme.shortTransition};

  &:hover {
    background: ${props => props.danger ? theme.dangerLight : theme.primaryLight};
  }

  &:disabled {
    border: 2px solid ${theme.disabled};
    background: ${theme.disabled};
    color: ${theme.secondaryText};
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: ${theme.background};
  border: 2px solid ${props => props.danger ? theme.danger : theme.primary};
  color: ${props => props.danger ? theme.danger : theme.primary};

  &:hover {
    background: ${props => props.danger ? theme.danger : theme.primary};
    color: ${theme.invertedText};
  }

  &:disabled {
    background: ${theme.background};
    border: 2px solid ${theme.disabled};
    color: ${theme.disabled};
    cursor: auto;
  }
`;
