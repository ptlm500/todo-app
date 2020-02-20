const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const acceptLanguage = require('accept-language');
const port = process.env.PORT || 8080;

acceptLanguage.languages(['en', 'de']);

const todos = {
  'test-id': {
    id: 'test-id',
    name: 'Test Todo',
    description: 'Pass all tests!',
    creationDate: '1581549548000'
  },
  'test-id-2': {
    id: 'test-id-2',
    name: 'Test Todo 2',
    description: 'Style these things!',
    creationDate: '1581549548000'
  }
};

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

app.get('/api/todos', (_, res) => {
  console.log('/api/todos sending todos');
  res.status(200)
    .json({todos});
});

app.get('/api/todo/:todoId', (req, res) => {
  const { todoId } = req.params;

  if (todos[todoId]) {
    console.log('/api/todo returning todo', todoId);
    res.status(200)
      .json({todo: todos[todoId]});
  }
  console.error(`/api/todo no todo with id ${todoId} found`);
  res.status(404);
});

app.get('/api/todo/:todoId', (req, res) => {
  const { todoId } = req.params;

  if (todos[todoId]) {
    console.log('/api/todo updating todo', todoId);
    todos[todoId] = req.body.todo;
    res.status(200)
      .json({todo: todos[todoId]});
  }
});

app.delete('/api/todo/:todoId', (req, res) => {
  const { todoId } = req.params;

  if (todos[todoId]) {
    console.log('/api/todo deleted todo', todoId);
    delete todos[todoId];
    res.status(200)
      .json({todoId});
  }
  console.error(`/api/todo no todo with id ${todoId} found`);
  res.status(404);
});

app.get('*', (req, res) =>{
  res.status(200)
    .sendFile(path.join(__dirname, '/client/build/index.html'));
});
