import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'todo.icons.delete.title',
    defaultMessage: 'Delete',
    description: 'Delete icon title'
  }
});

// Icon from https://freeicons.io/
export default function Delete(props) {
  const { title } = props;
  const intl = useIntl();

  return (
    <svg width="14px" height="18px" viewBox="0 0 14 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>{title || intl.formatMessage(messages.title)}</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-207.000000, -245.000000)">
          <g transform="translate(100.000000, 100.000000)">
            <g id="Outlined-/-Action-/-delete" transform="translate(102.000000, 142.000000)">
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M16,9 L16,19 L8,19 L8,9 L16,9 Z M14.5,3 L9.5,3 L8.5,4 L5,4 L5,6 L19,6 L19,4 L15.5,4 L14.5,3 Z M18,7 L6,7 L6,19 C6,20.1 6.9,21 8,21 L16,21 C17.1,21 18,20.1 18,19 L18,7 Z" fill="currentColor" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Delete.propTypes = {
  title: PropTypes.string
};
