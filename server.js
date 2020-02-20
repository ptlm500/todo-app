const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const detectLocale = require('./server/utils/detectLocale');
const port = process.env.PORT || 8080;

const app = express();

app.use(cookieParser());

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
    .sendFile(path.join(__dirname, '/dist/index.html'));
});

module.exports = app;
