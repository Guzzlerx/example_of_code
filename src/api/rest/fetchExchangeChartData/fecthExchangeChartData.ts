import { IRequestOptions, IResponseRates } from 'routes/ExchangeRates/CurrencyChart/type';
import { fetchData } from 'utils/requests/fetchData';

const BASE_URL = 'https://api.exchangerate.host/timeseries';

export const fetchExchangeChartData = (options: IRequestOptions): Promise<IResponseRates> => {
  const { baseCurrency, startDate, endDate, chartCurrency } = options;

  const queryParameters = {
    start_date: startDate,
    end_date: endDate,
    base: baseCurrency,
    places: '4',
    symbols: chartCurrency,
  };

  return fetchData(BASE_URL, { queryParameters });
};
