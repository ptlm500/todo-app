const VW = 'vw';
const VH = 'vh';
const DEFAULT_UNIT = VW;

// based on https://nilsb.org/2019-02-12-sass-mixins-in-styled-components/
export default function flexUnit(amount, min, max, unit = DEFAULT_UNIT, prop = 'font-size') {
  const minBreakpoint = (min / amount) * 100;
  const maxBreakpoint = max ? (max / amount) * 100 : false;
  const dimension = getDimension(getUnit(unit));

  return `
    @media (max-${dimension}: ${minBreakpoint}px) {
      ${prop}: ${min}px;
    }
    ${max ? `
      @media (min-${dimension}: ${maxBreakpoint}px) {
        ${prop}: ${max}px;
      }
    ` : ''}
    ${prop}: ${amount}${getUnit(unit)}
  `;
}

function getDimension(unit) {
  if (unit === VW) {
    return 'width';
  } else if (unit === VH) {
    return 'height';
  }
}

function getUnit(unit) {
  switch(unit) {
  case VW:
    return unit;
  case VH:
    return unit;
  default:
    console.warn('[flexUnit]: invalid unit provided, please use \'vh\' or \'vw\'. Defaulting to width.', unit);
    return DEFAULT_UNIT;
  }
}
