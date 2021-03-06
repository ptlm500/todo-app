import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'todo.icons.undo.title',
    defaultMessage: 'Undo',
    description: 'Undo icon title'
  }
});

// Icon from https://freeicons.io/
export default function Undo(props) {
  const { title } = props;
  const intl = useIntl();

  return (
    <svg width="21px" height="9px" viewBox="0 0 21 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>{title || intl.formatMessage(messages.title)}</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-238.000000, -1533.000000)">
          <g transform="translate(100.000000, 1428.000000)">
            <g id="Outlined-/-Content-/-undo" transform="translate(136.000000, 98.000000)">
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M12.5,8 C9.85,8 7.45,8.99 5.6,10.6 L2,7 L2,16 L11,16 L7.38,12.38 C8.77,11.22 10.54,10.5 12.5,10.5 C16.04,10.5 19.05,12.81 20.1,16 L22.47,15.22 C21.08,11.03 17.15,8 12.5,8 Z" fill="currentColor"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Undo.propTypes = {
  title: PropTypes.string
};
