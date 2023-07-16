import { CURRENCY_CODES_ENUM, PAYMENT_SYSTEMS_ENUM } from 'constants/cards/cards';
import { ICardProductAdvantagesProps } from './CardProductDetails/Parts/CardProductAdvantages/type';

export interface IMyCardProductItem {
  id: string;
  currencyCode: CURRENCY_CODES_ENUM;
  paymentSystem: PAYMENT_SYSTEMS_ENUM;
  cardName: ICardProductAdvantagesProps['cardName'];
}
