import React from 'react';
import renderer from 'react-test-renderer';
import Redo from './Redo';

describe('Redo', () => {
  it('renders a Redo icon', () => {
    const tree = renderer.create(<Redo />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a Redo icon with custom title', () => {
    const tree = renderer.create(<Redo title={'test title'}/>);

    expect(tree.root.findByType('title').children).toEqual(['test title']);
    expect(tree).toMatchSnapshot();
  });
});
