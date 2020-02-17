import React from 'react';
import renderer from 'react-test-renderer';
import Delete from './Delete';

describe('Delete', () => {
  it('renders a Delete icon', () => {
    const tree = renderer.create(<Delete />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a Delete icon with custom title', () => {
    const tree = renderer.create(<Delete title={'test title'}/>);

    expect(tree.root.findByType('title').children).toEqual(['test title']);
    expect(tree).toMatchSnapshot();
  });
});
