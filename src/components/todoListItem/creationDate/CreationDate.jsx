import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';
import styled from 'styled-components';
import { theme } from '../../../styles';

function CreationDate(props) {
  const {
    className,
    creationDate
  } = props;

  return (
    <a className={className}>
      <FormattedDate
        value={new Date(parseInt(creationDate))}
        year="numeric"
        month="long"
        day="2-digit"
        hour="numeric"
        minute="numeric"
      />
    </a>
  );
}

CreationDate.propTypes = {
  className: PropTypes.string.isRequired,
  creationDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default styled(CreationDate)`
  ${theme.font.bodySize};
  color: ${theme.colour.secondaryText}
`;
