import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InlineEditable from '../../inline-editable';
import Input from '../../input';
import { theme } from '../../../styles';


function Name(props) {
  const {
    className,
    updateName
  } = props;
  const nameInStore = props.name;
  const [name, setName] = useState(nameInStore);

  useEffect(() => {
    // Set name state if stored name changes
    setName(nameInStore);
  }, [nameInStore]);

  return (
    <InlineEditable
      className={className}
      value={name}
      placeholder={' '}
      onSubmit={updateName}
    >
      <Input
        onChange={e => setName(e.target.value)}
      />
    </InlineEditable>
  );
}

Name.propTypes = {
  className: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default styled(Name)`
  ${theme.headerFontSize};
  font-weight: 600;
  min-width: 100px;
`;
