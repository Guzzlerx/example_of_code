import { CURRENCY_CODES_ENUM, PAYMENT_SYSTEMS_ENUM } from 'constants/cards/cards';
import { ICardProductAdvantagesProps } from '../CardProductDetails/Parts/CardProductAdvantages/type';

export interface ICardProductData {
  cardName: ICardProductAdvantagesProps['cardName'];
  currency: CURRENCY_CODES_ENUM;
  paymentSystem: PAYMENT_SYSTEMS_ENUM;
}

export interface IUseCardProductContext extends ICardProductData {
  showCardInfo: ({ cardName, currency, paymentSystem }: ICardProductData) => void;
}
