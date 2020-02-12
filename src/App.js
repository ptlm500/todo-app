import React from 'react';
import TodoList from './components/todoList';

import './app.scss';

export default function App() {
  return (
    <div className='app'>
      <h1>Welcome to TODO app</h1>
      <TodoList />
    </div>
  );
}
