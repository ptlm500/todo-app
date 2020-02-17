import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from './IconButton';
import 'jest-styled-components';

describe('IconButton', () => {
  it('renders an IconButton', () => {
    const tree = renderer.create(<IconButton />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a small IconButton', () => {
    const tree = renderer.create(<IconButton size='small' />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a large IconButton', () => {
    const tree = renderer.create(<IconButton size='large' />);
    expect(tree).toMatchSnapshot();
  });
});
