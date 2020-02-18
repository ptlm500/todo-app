import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Cookie from 'js-cookie';
import store from './state/store';

import TodoList from './components/todoList';
import AddTodoListItem from './components/addTodoListItem';
import RecordingControls from './components/recordingControls';

import './app.scss';

import en from '../nls/en.json';
import de from '../nls/de.json';
const messages = {
  'en': en,
  'de': de
};

const getLocale = () => fetch('/api/locale');

const locale = Cookie.get('locale') || 'en';

export default function App() {
  getLocale();

  return (
    <Provider store={store}>
      <IntlProvider
        locale={locale}
        key={locale}
        messages={messages[locale]}
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
