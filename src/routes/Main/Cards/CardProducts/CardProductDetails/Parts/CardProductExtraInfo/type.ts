import { CARD_NAMES_ENUM } from 'constants/cards/cards';

export interface ICardProductExtraInfoProps {
  cardName: Extract<
    CARD_NAMES_ENUM,
    CARD_NAMES_ENUM.INFINITY_PREMIUM | CARD_NAMES_ENUM.SMART_PAYOUT
  >;
}
