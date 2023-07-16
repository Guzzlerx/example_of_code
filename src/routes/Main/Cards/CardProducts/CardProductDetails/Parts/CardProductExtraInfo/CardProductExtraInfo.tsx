import { ReactNode } from 'react';
import { AFlexContainer } from 'components/AFlexContainer/AFlexContainer';
import { ReactComponent as ChatBotImage } from 'assets/image/cardProductExtraInfo/chat_bot.svg';
import { ReactComponent as CryptoFlowersImage } from 'assets/image/cardProductExtraInfo/crypto_flowers.svg';
import { CARD_NAMES_ENUM } from 'constants/cards/cards';
import { ExtraInfoContent } from './ExtraInfoContent/ExtraInfoContent';
import { ICardProductExtraInfoProps } from './type';

export const CardProductExtraInfo = ({ cardName }: ICardProductExtraInfoProps) => {
  let image: ReactNode;

  switch (cardName) {
    case CARD_NAMES_ENUM.INFINITY_PREMIUM:
      image = <ChatBotImage data-testid="chatBotImage" />;
      break;

    case CARD_NAMES_ENUM.SMART_PAYOUT:
      image = <CryptoFlowersImage data-testid="cryptoFlowersImage" />;
      break;

    default:
      image = null;
  }

  return image ? (
    <AFlexContainer data-testid="CardProductExtraInfo" alignItems="center">
      {image}
      <ExtraInfoContent cardName={cardName} />
    </AFlexContainer>
  ) : null;
};
