import React from 'react';
import renderer from 'react-test-renderer';
import {
  PrimaryButton,
  SecondaryButton
} from './Button';
import 'jest-styled-components';

describe('PrimaryButton', () => {
  it('renders a Primary button', () => {
    const tree = renderer.create(<PrimaryButton />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a disabled Primary button', () => {
    expect(renderer.create(<PrimaryButton disabled />).toJSON()).toMatchSnapshot();
  });

  it('renders a Primary danger button', () => {
    const tree = renderer.create(<PrimaryButton danger />);
    expect(tree).toMatchSnapshot();
  });
});

describe('SecondaryButton', () => {
  it('renders a SecondaryButton button', () => {
    const tree = renderer.create(<SecondaryButton />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a SecondaryButton Primary button', () => {
    expect(renderer.create(<SecondaryButton disabled />).toJSON()).toMatchSnapshot();
  });

  it('renders a SecondaryButton danger button', () => {
    const tree = renderer.create(<SecondaryButton danger />);
    expect(tree).toMatchSnapshot();
  });
});
