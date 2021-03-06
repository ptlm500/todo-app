import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'todo.icons.redo.title',
    defaultMessage: 'Redo',
    description: 'Redo icon title'
  }
});

// Icon from https://freeicons.io/
export default function Redo(props) {
  const { title = 'Redo' } = props;
  const intl = useIntl();

  return (
    <svg width="21px" height="9px" viewBox="0 0 21 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>{title || intl.formatMessage(messages.title)}</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-747.000000, -1533.000000)">
          <g transform="translate(100.000000, 1428.000000)">
            <g id="Outlined-/-Content-/-redo" transform="translate(646.000000, 98.000000)">
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M18.4,10.6 C16.55,8.99 14.15,8 11.5,8 C6.85,8 2.92,11.03 1.54,15.22 L3.9,16 C4.95,12.81 7.95,10.5 11.5,10.5 C13.45,10.5 15.23,11.22 16.62,12.38 L13,16 L22,16 L22,7 L18.4,10.6 Z" fill="currentColor" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Redo.propTypes = {
  title: PropTypes.string
};
