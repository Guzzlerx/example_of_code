import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BaseURL } from 'components/Header/BackEndSwitcher/type';

export const client = new ApolloClient({
  uri: BaseURL.javaGraphQl,
  cache: new InMemoryCache(),
});
