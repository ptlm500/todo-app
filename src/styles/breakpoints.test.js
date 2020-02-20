import breakpoints from './breakpoints';

const testContent = 'width: 100px';

describe('breakpoints', () => {
  it('exports a phoneOnly media query', () => {
    expect(breakpoints.phoneOnly(testContent)).toMatchSnapshot();
  });

  it('exports a tabletPortaitUp media query', () => {
    expect(breakpoints.tabletPortaitUp(testContent)).toMatchSnapshot();
  });

  it('exports a tabletLandscapeUp media query', () => {
    expect(breakpoints.tabletLandscapeUp(testContent)).toMatchSnapshot();
  });

  it('exports a desktopUp media query', () => {
    expect(breakpoints.desktopUp(testContent)).toMatchSnapshot();
  });

  it('exports a bigDesktopUp media query', () => {
    expect(breakpoints.bigDesktopUp(testContent)).toMatchSnapshot();
  });
});
