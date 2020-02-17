import React from 'react';
import renderer from 'react-test-renderer';
import Indicator, { circlePulse } from './Indicator';
import 'jest-styled-components';

describe('Indicator', () => {
  it('renders an indicator', () => {
    const tree = renderer.create(<Indicator fill={'#fff'} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a disabled indicator', () => {
    const tree = renderer.create(<Indicator fill={'#fff'} disabled />);
    expect(tree).toMatchSnapshot();
  });
});

describe('pulsing Indicator', () => {
  it('renders a pulsing indicator', () => {
    const tree = renderer.create(<Indicator pulsing fill={'#fff'} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders a disabled pulsing indicator', () => {
    const tree = renderer.create(<Indicator pulsing fill={'#fff'} disabled />);
    expect(tree).toMatchSnapshot();
  });
});

describe('circlePulse', () => {
  it('matches the snapshot', () => {
    expect(circlePulse()).toMatchSnapshot();
  });
});
