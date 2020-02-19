// width suggestions from https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
export default {
  phoneOnly: (content) => `
  @media (max-width: 599px) {
    ${content}
  }
  `,
  tabletPortaitUp: (content) => `
  @media (min-width: 600px) {
    ${content}
  }
  `,
  tabletLandscapeUp: (content) => `
  @media (min-width: 900px) {
    ${content}
  }
  `,
  desktopUp: (content) => `
  @media (min-width: 1200px) {
    ${content}
  }
  `,
  bigDesktopUp: (content) => `
  @media (min-width: 1800px) {
    ${content}
  }
  `
};
