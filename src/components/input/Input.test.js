import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';
import 'jest-styled-components';

describe('Input', () => {
  it('renders an input', () => {
    const tree = renderer.create(<Input />);
    expect(tree).toMatchSnapshot();
  });
});
