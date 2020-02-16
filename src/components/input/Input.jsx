import styled from 'styled-components';
import { theme } from '../../styles';

export default styled.input`
  background: ${theme.background};
  color: ${theme.text};
  font: inherit;
  appearance: none;
  border: none;
  border-bottom: 1px solid ${theme.divider}
`;
