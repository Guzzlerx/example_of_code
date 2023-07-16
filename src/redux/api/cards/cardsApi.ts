import { apiSlice } from 'redux/api/apiSlice';
import { ICardStatusSwitcherResponse } from 'routes/Main/Cards/MyCards/MyCardDetails/MyCardDetailsTabGroup/Tabs/ManageTab/Parts/CardStatusSwitcher/type';
import { CARD_TYPES_ENUM } from 'constants/cards/cards';
import {
  ICardProductsList,
  IMyCardDetails,
  IMyCardsList,
  INewCardRequest,
  TUpdateCardStatusRequest,
} from './type';

export const cardsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCreditCards: builder.query<IMyCardsList, void>({
      query: () => '/credit-cards',
    }),
    getDebitCards: builder.query<IMyCardsList, void>({
      query: () => '/deposit-cards',
    }),
    getCardDetails: builder.query<IMyCardDetails, { id: string; type: CARD_TYPES_ENUM }>({
      query: ({ id, type }) => `/${type.toLowerCase()}-cards/${id}`,
    }),
    getCardProducts: builder.query<ICardProductsList, void>({
      query: () => '/cards-products',
    }),
    updateCardStatus: builder.mutation<ICardStatusSwitcherResponse, TUpdateCardStatusRequest>({
      query: ({ cardId, currentStatus, cardType }) => ({
        url: `${cardType.toLocaleLowerCase()}-cards/${cardId}`,
        method: 'PATCH',
        body: currentStatus,
      }),
    }),
    getNewCard: builder.mutation<void, INewCardRequest>({
      query: body => ({
        url: '/deposit-cards-orders/new',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useGetCreditCardsQuery,
  useGetDebitCardsQuery,
  useGetCardProductsQuery,
  useGetCardDetailsQuery,
  useUpdateCardStatusMutation,
  useGetNewCardMutation,
} = cardsApi;
