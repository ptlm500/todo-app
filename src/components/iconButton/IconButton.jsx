import styled from 'styled-components';
import { theme } from '../../styles';

export default styled.button`
  background: none;
  border: none;
  width: 3rem;
  height: 3rem;
  padding: 0;
  cursor: pointer;
  transition: ${theme.longTransition};

  > svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.2) rotate(1turn);
    color: ${theme.invertedText};
  }
`;
