import React from 'react';
import renderer from 'react-test-renderer';
import Loading, { load } from './Loading';
import 'jest-styled-components';

describe('Loading', () => {
  it('matches the snapshot', () => {
    expect(renderer.create(<Loading />)).toMatchSnapshot();
  });

  it('matches the snapshot when a custom size is provided', () => {
    expect(renderer.create(<Loading size={10} />)).toMatchSnapshot();
  });
});

describe('load', () => {
  it('matches the snapshot', () => {
    expect(load()).toMatchSnapshot();
  });
});
