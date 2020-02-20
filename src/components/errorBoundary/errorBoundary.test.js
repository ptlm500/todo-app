import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from './ErrorBoundary';

function GoodComponent() {
  return (<div>{'I\'m a good component'}</div>);
}

function BadComponent() {
  throw new Error('test error');
}

describe('Error Boundary', () => {
  it('renders a child component that doesn\'t throw an error', () => {
    const tree = renderer.create(
      <ErrorBoundary>
        <GoodComponent />
      </ErrorBoundary>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders the error message when a child component throws an error', () => {
    const tree = renderer.create(
      <ErrorBoundary>
        <BadComponent />
      </ErrorBoundary>
    );

    expect(tree).toMatchSnapshot();
  });
});
