import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import store from './state/store';

import TodoList from './components/todoList';
import AddTodoListItem from './components/addTodoListItem';
import RecordingControls from './components/recordingControls';

import './app.scss';

export default function App() {
  return (
    <Provider store={store}>
      <IntlProvider
        locale='en'
      >
        <div className='app'>
          <TodoList />
          <AddTodoListItem />
          <RecordingControls />
        </div>
      </IntlProvider>
    </Provider>
  );
}
