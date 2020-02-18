import React from 'react';
import { renderWithIntl } from '../../../test/utils';
import Delete from './Delete';

describe('Delete', () => {
  it('renders a Delete icon', () => {
    const tree = renderWithIntl(<Delete />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a Delete icon with custom title', () => {
    const tree = renderWithIntl(<Delete title={'test title'}/>);

    expect(tree.root.findByType('title').children).toEqual(['test title']);
    expect(tree).toMatchSnapshot();
  });
});
