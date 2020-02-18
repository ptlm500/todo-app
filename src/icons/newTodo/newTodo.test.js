import React from 'react';
import { renderWithIntl } from '../../../test/utils';
import NewTodo from './NewTodo';

describe('NewTodo', () => {
  it('renders a NewTodo icon', () => {
    const tree = renderWithIntl(<NewTodo />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a NewTodo icon with custom title', () => {
    const tree = renderWithIntl(<NewTodo title={'test title'}/>);

    expect(tree.root.findByType('title').children).toEqual(['test title']);
    expect(tree).toMatchSnapshot();
  });
});
