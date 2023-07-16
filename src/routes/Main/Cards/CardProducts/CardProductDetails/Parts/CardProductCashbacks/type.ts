import { CARD_NAMES_ENUM } from 'constants/cards/cards';

export interface ICardProductCashbacksProps {
  cardName: Exclude<
    CARD_NAMES_ENUM,
    CARD_NAMES_ENUM.SMART_PAYOUT | CARD_NAMES_ENUM.INFINITY_PREMIUM | CARD_NAMES_ENUM.PERSONAL_LOAN
  >;
}
