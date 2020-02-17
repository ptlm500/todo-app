import theme from './theme';

describe('theme', () => {
  it('matches the snapshot', () => {
    expect(theme).toMatchSnapshot();
  });
});
