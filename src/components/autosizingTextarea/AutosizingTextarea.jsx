import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import { theme } from '../../styles';

export default styled(TextareaAutosize)`
  background: ${theme.colour.background};
  color: ${theme.colour.text};
  font: inherit;
  appearance: none;
  border: none;
  border: 1px solid ${theme.colour.divider};
  padding: 0px;
  width: 100%;
  max-width: 100%;
`;
