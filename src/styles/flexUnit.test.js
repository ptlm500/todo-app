import flexUnit from './flexUnit';

const originalWarn = console.warn;
console.warn = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  console.warn = originalWarn;
});

describe('flexUnit', () => {
  it('defaults to use width and provide a font-size style', () => {
    expect(flexUnit(5, 100, 200)).toMatchSnapshot();
  });

  it('uses width when vw is provided', () => {
    expect(flexUnit(5, 100, 200, 'vw')).toMatchSnapshot();
  });

  it('uses height when vh is provided', () => {
    expect(flexUnit(5, 100, 200, 'vh')).toMatchSnapshot();
  });

  it('warns when an invalid unit is provided and defaults to width', () => {
    expect(flexUnit(5, 100, 200, 'invalid')).toMatchSnapshot();

    expect(console.warn)
      .toHaveBeenCalledWith(
        '[flexUnit]: invalid unit provided, please use \'vh\' or \'vw\'. Defaulting to width.',
        'invalid'
      );
  });

  it('allows a custom prop to be specified', () => {
    expect(flexUnit(5, 100, 200, 'vw', 'width')).toMatchSnapshot();
  });
});
