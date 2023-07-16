import { useTranslation } from 'react-i18next';
import { useGetCardProductsQuery } from 'redux/api/cards/cardsApi';
import { useGetUserGeneralInfoQuery } from 'redux/api/user/userApi';
import { ALoader } from 'components/ALoader/ALoader';
import { CardProductItem } from './CardProductItem/CardProductItem';
import { StyledATitle, StyledContainer } from './CardProducts.styles';

export const CardProducts = () => {
  const { t } = useTranslation('cards');

  const { isFetching: isGeneralInfoFetching } = useGetUserGeneralInfoQuery();
  const { data: { cardProducts = [] } = {}, isFetching: isCardProductsFetching } =
    useGetCardProductsQuery();

  return (
    <>
      <StyledATitle size={24} lineHeight={36} weight={700} marginBottom={40}>
        {t('card_products.title')}
      </StyledATitle>
      <StyledContainer>
        {Boolean(isCardProductsFetching && !isGeneralInfoFetching) && <ALoader hasBackground />}
        {Boolean(cardProducts?.length) &&
          cardProducts.map(card => <CardProductItem key={card.id} {...card} />)}
      </StyledContainer>
    </>
  );
};
