import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from './IconButton';
import 'jest-styled-components';

describe('IconButton', () => {
  it('renders an IconButton', () => {
    const tree = renderer.create(<IconButton />);
    expect(tree).toMatchSnapshot();
  });
});
