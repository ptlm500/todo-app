import React from 'react';
import { renderWithIntl } from '../../../../test/utils';
import CreationDate from './CreationDate';
import 'jest-styled-components';

describe('CreationDate', () => {
  it('renders the creation date using FormattedMessage', () => {
    const tree = renderWithIntl(
      <CreationDate className='test-class' creationDate='1582029687000' />
    );

    expect(tree).toMatchSnapshot();
  });
});
