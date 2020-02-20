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
import Loading from '../components/loading/Loading';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
const messages = {
  'en': en,
  'de': de
};

function supportedLocale(locale) {
  return messages[locale] ? true : false;
}

function useLocale() {
  const DEFAULT_LOCALE = 'en';
  const [locale, setLocale] = useState('');

  useEffect(() => {
    fetch('/api/locale')
      .then(res => {
        res.json()
          .then(data => {
            setLocale(
              supportedLocale(data.locale) ? data.locale : DEFAULT_LOCALE
            );
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
    <ErrorBoundary>
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
          ) : (
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          )
        }
      </Provider>
    </ErrorBoundary>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5%;
  font-family: ${theme.font.family};
`;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoListWrapper = styled.div`
  padding-bottom: 48px
`;
