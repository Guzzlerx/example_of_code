import { ApolloProvider } from '@apollo/client';
import { GlobalStyle } from 'GlobalStyle';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import 'utils/languages/i18n';
import { client } from 'api/graphQL/apolloClient';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <GlobalStyle />
          <App />
        </Provider>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>,
);
