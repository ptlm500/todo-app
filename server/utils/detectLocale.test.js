const detectLocale = require('./detectLocale');
const acceptLanguage = require('accept-language');
const config = require('../config.json');

const defaultTestReq = {
  headers: {
    'accept-language': 'de'
  },
  cookies: {
    locale: 'de'
  }
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('detectLocale', () => {
  it('calls acceptLanguage.languages with ACCEPTED_LANGUAGES', () => {
    const languagesSpy = jest.spyOn(acceptLanguage, 'languages');
    detectLocale(defaultTestReq);

    expect(languagesSpy).toHaveBeenCalledWith(config.ACCEPTED_LANGUAGES);
  });

  it('calls acceptLanguage.get with cookie.locale by default', () => {
    const getSpy = jest.spyOn(acceptLanguage, 'get');
    const locale = detectLocale(defaultTestReq);

    expect(getSpy).toHaveBeenCalledWith(defaultTestReq.cookies.locale);
    expect(locale).toBe(defaultTestReq.cookies.locale);
  });

  it('falls back on the accept-lanugage header if no cookie.locale is present', () => {
    const testReq = {
      headers: {
        'accept-language': 'de'
      },
      cookies: {}
    };


    const getSpy = jest.spyOn(acceptLanguage, 'get');
    const locale = detectLocale(testReq);

    expect(getSpy).toHaveBeenCalledWith(testReq.headers['accept-language']);
    expect(locale).toBe(testReq.headers['accept-language']);
  });

  it('falls back on DEFAULT_LOCALE if the locale cookie and accept-lanugage headers are not present', () => {
    const testReq = {
      headers: {
      },
      cookies: {}
    };


    const getSpy = jest.spyOn(acceptLanguage, 'get');
    const locale = detectLocale(testReq);

    expect(getSpy).toHaveBeenCalledWith(undefined);
    expect(locale).toBe(config.DEFAULT_LOCALE);
  });
});
