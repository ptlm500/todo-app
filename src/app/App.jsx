import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import styled from 'styled-components';
import { theme } from '../styles';
import store from '../state/store';
import TodoList from '../components/todoList';
import AddTodoListItem from '../components/addTodoListItem';
import RecordingControls from '../components/recordingControls';
import en from '../../nls/en.json';
import de from '../../nls/de.json';
const messages = {
  'en': en,
  'de': de
};

function useLocale() {
  const DEFAULT_LOCALE = 'en';
  const [locale, setLocale] = useState('');

  useEffect(() => {
    fetch('/api/locale')
      .then(res => {
        res.json()
          .then(data => {
            setLocale(data.locale ? data.locale : DEFAULT_LOCALE);
          })
          .catch(e => console.error('[/api/locale] Error parsing JSON', e));

      })
      .catch(e => console.error('[/api/locale]', e));
  }, []);

  return locale;
}

export default function App() {
  const locale = useLocale();

  return (
    <Provider store={store}>
      {
        locale ? (
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
        ) : (<div>Loading</div>)
      }
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
