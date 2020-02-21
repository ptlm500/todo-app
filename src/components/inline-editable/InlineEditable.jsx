import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function InlineEditable(props) {
  const {
    className,
    value,
    placeholder,
    children,
    onSubmit
  } = props;

  if (Array.isArray(children)) {
    throw new Error('[InlineEditable]: Multiple child components passed. InlineEditable only accepts one child', children);
  }

  const childRef = useRef();

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (editing && childRef && childRef.current) {
      childRef.current.focus();
    }
  }, [editing, childRef]);

  const childWithProps = React.cloneElement(children, {
    ref: childRef,
    value,
    placeholder
  });

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      finishEdit();
    }
  }

  function finishEdit() {
    setEditing(false);
    onSubmit && onSubmit(value);
  }

  return (
    <div
      className={className ? `${className} inline-editable` : 'inline-editable'}
    >
      {
        editing ? (
          <div
            className='inline-editable__edit-container'
            onBlur={finishEdit}
            onKeyDown={handleKeyDown}
          >
            {childWithProps}
          </div>
        ) : (
          <div
            className='inline-editable__edit-trigger'
            onClick={() => setEditing(true)}
          >
            <Value>
              {value || placeholder || 'Provide a placeholder value'}
            </Value>
          </div>
        )
      }
    </div>
  );
}

const Value = styled.span`
  white-space: pre-wrap;
  word-break: break-word;
`;

InlineEditable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func
};
