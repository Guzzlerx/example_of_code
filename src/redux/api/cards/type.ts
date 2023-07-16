import { IMyCardProductItem } from 'routes/Main/Cards/CardProducts/type';
import { ICardStatusSwitcherProps } from 'routes/Main/Cards/MyCards/MyCardDetails/MyCardDetailsTabGroup/Tabs/ManageTab/Parts/CardStatusSwitcher/type';
import { IMyCardItem } from 'routes/Main/Cards/MyCards/type';
import {
  CARD_NAMES_ENUM,
  CARD_STATUSES_ENUM,
  CARD_TYPES_ENUM,
  CURRENCY_CODES_ENUM,
  PAYMENT_SYSTEMS_ENUM,
} from 'constants/cards/cards';

export interface IMyCardsList {
  cards: IMyCardItem[];
}

export interface IMyCardDetails {
  creditLimit: string;
  principalDebt: string;
  terminationDate: string;
  accountId: string;
  accountNumber: string;
  balance: string;
  cardId: string;
  cardNumber: string;
  clientId: string;
  currencyCode: CURRENCY_CODES_ENUM;
  expirationDate: string;
  holderName: string;
  paymentSystem: PAYMENT_SYSTEMS_ENUM;
  productName: CARD_NAMES_ENUM;
  status: CARD_STATUSES_ENUM;
  transactionLimit: string;
}

export interface ICardProductsList {
  cardProducts: IMyCardProductItem[];
}

export type TUpdateCardStatusRequest = Omit<ICardStatusSwitcherProps, 'refetchHandler'>;
export interface INewCardRequest {
  idProduct?: string;
  holderName?: string;
  cardType?: CARD_TYPES_ENUM;
}
