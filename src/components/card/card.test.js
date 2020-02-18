import React from 'react';
import renderer from 'react-test-renderer';
import { Card, AnimatedCard } from './Card';
import 'jest-styled-components';

describe('Card', () => {
  it('renders a Card', () => {
    const tree = renderer.create(<Card />);
    expect(tree).toMatchSnapshot();
  });
});

describe('AnimatedCard', () => {
  it('renders an AnimatedCard', () => {
    const tree = renderer.create(
      <AnimatedCard animationClass={'test-class'} timeout={100}/>
    );
    expect(tree).toMatchSnapshot();
  });
});

