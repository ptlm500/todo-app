import React from 'react';
import TodoList from './components/todoList';
import AddTodoListItem from './components/addTodoListItem';
import RecordingControls from './components/recordingControls';

import './app.scss';

export default function App() {
  return (
    <div className='app'>
      <TodoList />
      <AddTodoListItem />
      <RecordingControls />
    </div>
  );
}
