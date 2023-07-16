import { Trans, useTranslation } from 'react-i18next';
import { ATitle } from 'components/ATitle/ATitle';
import { CARD_NAMES_ENUM } from 'constants/cards/cards';
import { COLOR_PALETTE } from 'constants/colors/colors';
import { ICardProductExtraInfoProps } from '../type';
import { StyledContainer, StyledLi, StyledSubtitle, StyledUl } from './ExtraInfoContent.styles';

export const ExtraInfoContent = ({ cardName }: ICardProductExtraInfoProps) => {
  const { t } = useTranslation('cards');

  const { gray900 } = COLOR_PALETTE;

  const translations = {
    title: t(`card_product_extra_info.${cardName}.title`),
    subtitle: t(`card_product_extra_info.${cardName}.subtitle`),
  };

  const listItemPremium = [
    t(`card_product_extra_info.infinity_premium.list_item.1`),
    t(`card_product_extra_info.infinity_premium.list_item.2`),
    t(`card_product_extra_info.infinity_premium.list_item.3`),
    t(`card_product_extra_info.infinity_premium.list_item.4`),
    t(`card_product_extra_info.infinity_premium.list_item.5`),
    t(`card_product_extra_info.infinity_premium.list_item.6`),
    t(`card_product_extra_info.infinity_premium.list_item.7`),
    t(`card_product_extra_info.infinity_premium.list_item.8`),
  ];

  const listItemSmart = [
    t(`card_product_extra_info.smart_payout.list_item.1`),
    t(`card_product_extra_info.smart_payout.list_item.2`),
    t(`card_product_extra_info.smart_payout.list_item.3`),
  ];

  const firstColumnIndex = 4;
  const listItems = cardName === CARD_NAMES_ENUM.INFINITY_PREMIUM ? listItemPremium : listItemSmart;
  const firstColumnItems = listItems.slice(0, firstColumnIndex);
  const secondColumnItems = listItems.slice(firstColumnIndex);
  const isOneColumn = firstColumnItems.length <= 3;

  return (
    <StyledContainer isOneColumn={isOneColumn}>
      <ATitle size={20} weight={700} lineHeight={28} color={gray900}>
        {translations.title}
      </ATitle>
      <StyledSubtitle size={14} weight={400} lineHeight={20} isOneColumn={isOneColumn}>
        {translations.subtitle}
      </StyledSubtitle>
      <StyledUl>
        {firstColumnItems.map(item => (
          <StyledLi key={item} isOneColumn={isOneColumn}>
            <Trans>{item}</Trans>
          </StyledLi>
        ))}
        {secondColumnItems.map(item => (
          <StyledLi key={item} isOneColumn={isOneColumn}>
            {item}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledContainer>
  );
};
