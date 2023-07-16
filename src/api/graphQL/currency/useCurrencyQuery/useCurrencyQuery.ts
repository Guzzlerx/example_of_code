import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

const getExchangeRate = loader('./gql/query.graphql');

export const useCurrencyQuery = () => {
  const { data, loading, error } = useQuery(getExchangeRate);
  return { loading, data: data && data.getExchangeRate.rates, error };
};
