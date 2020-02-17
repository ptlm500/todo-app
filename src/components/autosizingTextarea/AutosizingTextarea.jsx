import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import { theme } from '../../styles';

export default styled(TextareaAutosize)`
  background: ${theme.background};
  color: ${theme.text};
  font: inherit;
  appearance: none;
  border: none;
  border: 1px solid ${theme.divider};
  padding: 0px;
  width: 100%;
`;
