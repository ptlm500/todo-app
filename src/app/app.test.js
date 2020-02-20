import React from 'react';
import renderer, { act } from 'react-test-renderer';
import App from './App';
import { IntlProvider } from 'react-intl';
import en from '../../nls/en.json';
import de from '../../nls/de.json';
import 'jest-styled-components';


beforeEach(() => {
  fetch.resetMocks();
  jest.clearAllMocks();
});


const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

// Mocking transition group https://github.com/reactjs/react-transition-group/issues/208
jest.mock('react-transition-group', () => {
  return {
    // eslint-disable-next-line react/prop-types
    CSSTransition: function CSSTransition({children}) {
      return (
        <div>{children}</div>
      );
    }
  };
});

describe('App', () => {
  it('matches the snapshot', async () => {
    fetch.mockResponseOnce(JSON.stringify({ locale: 'en' }));
    let tree;

    act(() => {
      tree = renderer.create(<App />);
    });

    await wait();

    expect(tree).toMatchSnapshot();
  });

  it('calls fetch with the localeEndpoint and shows loading state', () => {
    fetch.mockResponseOnce(JSON.stringify({ locale: 'en' }));
    let tree;

    act(() => {
      tree = renderer.create(<App />);
    });

    expect(fetch.mock.calls[0][0]).toBe('/api/locale');

    expect(tree).toMatchSnapshot();
  });

  it('calls js-cookie to get the locale cookie', async () => {
    fetch.mockResponseOnce(JSON.stringify({locale: 'de'}));
    const testLocale = 'de';

    let tree;

    act(() => {
      tree = renderer.create(<App />);
    });

    await wait();

    const intlProvider = tree.root.findByType(IntlProvider);
    expect(intlProvider.props.locale).toBe(testLocale);
    expect(intlProvider.props.messages).toEqual(de);
  });

  it('defaults to en locale when no messages file exists for the locale', async () => {
    fetch.mockResponseOnce(JSON.stringify({locale: 'fr'}));
    let tree;

    act(() => {
      tree = renderer.create(<App />);
    });

    await wait();

    const intlProvider = tree.root.findByType(IntlProvider);
    expect(intlProvider.props.locale).toBe('en');
    expect(intlProvider.props.messages).toEqual(en);

  });
});
