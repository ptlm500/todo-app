const acceptLanguage = require('accept-language');
const config = require('../config.json');

function detectLocale(req) {
  acceptLanguage.languages(config.ACCEPTED_LANGUAGES);

  const cookieLocale = req.cookies.locale;

  return acceptLanguage.get(cookieLocale || req.headers['accept-language']) ||
    config.DEFAULT_LOCALE;
}

module.exports = detectLocale;
