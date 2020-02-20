const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const acceptLanguage = require('accept-language');
const port = process.env.PORT || 8080;

acceptLanguage.languages(['en', 'de']);

const app = express();

app.use(cookieParser());

function detectLocale(req) {
  const cookieLocale = req.cookies.locale;

  return acceptLanguage.get(cookieLocale || req.headers['accept-language']) || 'en';
}

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/locale', (req, res) => {
  const locale = detectLocale(req);
  console.log('/api/locale sending locale', locale);
  res.status(200)
    .json({locale});
});

app.get('*', (req, res) =>{
  res.status(200)
    .sendFile(path.join(__dirname, '/client/build/index.html'));
});
