import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Cookie from 'js-cookie';
import styled from 'styled-components';
import { theme } from './styles';
import store from './state/store';
import TodoList from './components/todoList';
import AddTodoListItem from './components/addTodoListItem';
import RecordingControls from './components/recordingControls';

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
        <AppWrapper>
          <TodoListWrapper>
            <TodoList />
            <AddTodoListItem />
          </TodoListWrapper>
          <RecordingControls />
        </AppWrapper>
      </IntlProvider>
    </Provider>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5%;
  font-family: ${theme.font.family};
`;

const TodoListWrapper = styled.div`
  padding-bottom: 48px
`;
