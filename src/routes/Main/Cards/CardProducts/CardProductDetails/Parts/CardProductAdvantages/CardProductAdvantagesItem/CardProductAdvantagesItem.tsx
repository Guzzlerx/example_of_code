import { CARD_NAMES_ENUM } from 'constants/cards/cards';
import { CardProductCashbacks } from '../../CardProductCashbacks/CardProductCashbacks';
import { CardProductExtraInfo } from '../../CardProductExtraInfo/CardProductExtraInfo';
import { ICardProductAdvantagesItemProps } from './type';

export const CardProductAdvantagesItem = ({ cardName }: ICardProductAdvantagesItemProps) => {
  switch (cardName) {
    case CARD_NAMES_ENUM.UNIVERSAL_CARD:
    case CARD_NAMES_ENUM.INFINITY_CLASSIC:
    case CARD_NAMES_ENUM.INFINITY_GOLD:
    case CARD_NAMES_ENUM.PURCHASE_PLUS:
      return <CardProductCashbacks cardName={cardName} />;

    case CARD_NAMES_ENUM.INFINITY_PREMIUM:
    case CARD_NAMES_ENUM.SMART_PAYOUT:
      return <CardProductExtraInfo cardName={cardName} />;

    default:
      return null;
  }
};
