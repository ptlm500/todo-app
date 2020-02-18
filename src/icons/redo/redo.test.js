import React from 'react';
import { renderWithIntl } from '../../../test/utils';
import Redo from './Redo';

describe('Redo', () => {
  it('renders a Redo icon', () => {
    const tree = renderWithIntl(<Redo />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a Redo icon with custom title', () => {
    const tree = renderWithIntl(<Redo title={'test title'}/>);

    expect(tree.root.findByType('title').children).toEqual(['test title']);
    expect(tree).toMatchSnapshot();
  });
});
