import { AFlexContainer } from 'components/AFlexContainer/AFlexContainer';
import { CARD_CONFIGS } from 'constants/cards/cardConfigs';
import { useCardProductContext } from '../CardProductsLayout/CardProductsLayout';
import { Decision } from './Decision/Decision';
import { MainTitle } from './MainTitle/MainTitle';
import { CardProductAdvantages } from './Parts/CardProductAdvantages/CardProductAdvantages';
import { CardProductExtraAdvantages } from './Parts/CardProductExtraAdvantages/CardProductExtraAdvantages';
import { PaymentSystemInfo } from './Parts/PaymentSystemInfo/PaymentSystemInfo';
import { StepsInfo } from './Parts/StepsInfo/StepsInfo';

export const CardProductDetails = () => {
  const { cardName, currency, paymentSystem } = useCardProductContext();

  return (
    <AFlexContainer flexDirection="column" dataTestId="CardProductDetails">
      <MainTitle cardName={cardName} currencyCode={currency} paymentSystem={paymentSystem} />
      <CardProductAdvantages data={CARD_CONFIGS[cardName].advantages} cardName={cardName} />
      <StepsInfo />
      <PaymentSystemInfo />
      <CardProductExtraAdvantages data={CARD_CONFIGS[cardName].extraAdvantages} />
      <Decision cardName={cardName} />
    </AFlexContainer>
  );
};
