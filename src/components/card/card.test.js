import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';
import 'jest-styled-components';

describe('Card', () => {
  it('renders a Card', () => {
    const tree = renderer.create(<Card />);
    expect(tree).toMatchSnapshot();
  });
});
