import React from 'react';
import { renderWithIntl } from '../../../test/utils';
import Undo from './Undo';

describe('Undo', () => {
  it('renders a Undo icon', () => {
    const tree = renderWithIntl(<Undo />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a Undo icon with custom title', () => {
    const tree = renderWithIntl(<Undo title={'test title'}/>);

    expect(tree.root.findByType('title').children).toEqual(['test title']);
    expect(tree).toMatchSnapshot();
  });
});
