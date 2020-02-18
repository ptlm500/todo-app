import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

export default function renderWithIntl(element, options) {
  return renderer.create(
    <IntlProvider>
      {element}
    </IntlProvider>,
    options
  );
}
