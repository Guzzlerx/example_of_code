import { CARD_NAMES_ENUM } from 'constants/cards/cards';

export interface ICardProductAdvantagesItemProps {
  cardName: Exclude<CARD_NAMES_ENUM, CARD_NAMES_ENUM.PERSONAL_LOAN>;
}
