import { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { ABreadcrumbs } from 'components/ABreadcrumbs/ABreadcrumbs';
import { AFlexContainer } from 'components/AFlexContainer/AFlexContainer';
import { ICardProductData, IUseCardProductContext } from './type';

export const CardProductsLayout = () => {
  const [cardData, setCardData] = useState<ICardProductData | null>(null);

  const showCardInfo = ({ cardName, currency, paymentSystem }: ICardProductData) => {
    setCardData({ cardName, currency, paymentSystem });
  };

  return (
    <AFlexContainer flexDirection="column" dataTestId="MyCardsLayout">
      <ABreadcrumbs />
      <Outlet
        context={{
          cardName: cardData?.cardName,
          currency: cardData?.currency,
          paymentSystem: cardData?.paymentSystem,
          showCardInfo,
        }}
      />
    </AFlexContainer>
  );
};

export const useCardProductContext = () => useOutletContext<IUseCardProductContext>();
