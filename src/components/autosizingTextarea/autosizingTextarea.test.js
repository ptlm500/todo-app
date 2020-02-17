import React from 'react';
import renderer from 'react-test-renderer';
import AutosizingTextarea from './AutosizingTextarea';
import 'jest-styled-components';

describe('AutosizingTextarea', () => {
  it('renders an AutosizingTextarea', () => {
    const tree = renderer.create(<AutosizingTextarea />);
    expect(tree).toMatchSnapshot();
  });
});
