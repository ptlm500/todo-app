import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InlineEditable from '../../inline-editable';
import AutosizingTextarea from '../../autosizingTextarea';
import { theme } from '../../../styles';

function Description(props) {
  const {
    className,
    updateDescription
  } = props;
  const descriptionInStore = props.description;

  const [description, setDescription] = useState(descriptionInStore);

  useEffect(() => {
    // Set description state if stored description changes
    setDescription(descriptionInStore);
  }, [descriptionInStore]);

  return (
    <InlineEditable
      className={className}
      value={description}
      placeholder={' '}
      onSubmit={updateDescription}
    >
      <AutosizingTextarea
        onChange={e => setDescription(e.target.value)}
      />
    </InlineEditable>
  );
}

Description.propTypes = {
  className: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  updateDescription: PropTypes.func.isRequired
};

export default styled(Description)`
  ${theme.bodyFontSize};
  margin-bottom: 1rem;
  min-width: 100px;
`;
