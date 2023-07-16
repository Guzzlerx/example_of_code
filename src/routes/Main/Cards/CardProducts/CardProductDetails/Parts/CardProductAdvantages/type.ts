import { CARD_NAMES_ENUM } from 'constants/cards/cards';
import { ICardConfigsAdvantages } from 'constants/cards/types';

export interface ICardProductAdvantagesProps {
  cardName: Exclude<CARD_NAMES_ENUM, CARD_NAMES_ENUM.PERSONAL_LOAN>;
  data: ICardConfigsAdvantages[];
}
