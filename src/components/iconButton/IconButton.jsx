import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../styles';

const LARGE = 'large';
const SMALL = 'small';
const LARGE_SIZE = '3rem';
const SMALL_SIZE = '1rem';
const sizes = {
  'large': LARGE_SIZE,
  'small': SMALL_SIZE
};

function getSize(size) {
  return sizes[size];
}

const IconButton = styled.button`
  background: none;
  border: none;
  width: ${props => getSize(props.size)};
  height: ${props => getSize(props.size)};
  padding: 0;
  cursor: pointer;
  transition: ${theme.transition.long};

  > svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.2) rotate(1turn);
  }
`;

IconButton.propTypes = {
  size: PropTypes.oneOf([LARGE, SMALL])
};

IconButton.defaultProps = {
  size: LARGE
};

export default IconButton;
