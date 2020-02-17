import React from 'react';
import renderer from 'react-test-renderer';
import Undo from './Undo';

describe('Undo', () => {
  it('renders a Undo icon', () => {
    const tree = renderer.create(<Undo />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a Undo icon with custom title', () => {
    const tree = renderer.create(<Undo title={'test title'}/>);

    expect(tree.root.findByType('title').children).toEqual(['test title']);
    expect(tree).toMatchSnapshot();
  });
});
