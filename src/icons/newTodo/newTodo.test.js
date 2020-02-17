import React from 'react';
import renderer from 'react-test-renderer';
import NewTodo from './NewTodo';

describe('NewTodo', () => {
  it('renders a NewTodo icon', () => {
    const tree = renderer.create(<NewTodo />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a NewTodo icon with custom title', () => {
    const tree = renderer.create(<NewTodo title={'test title'}/>);

    expect(tree.root.findByType('title').children).toEqual(['test title']);
    expect(tree).toMatchSnapshot();
  });
});
