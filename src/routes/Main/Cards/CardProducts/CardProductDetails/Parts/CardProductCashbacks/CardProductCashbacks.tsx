import { useTranslation } from 'react-i18next';
import { ATitle } from 'components/ATitle/ATitle';
import { ReactComponent as AdvantagesGraph } from 'assets/image/cardDetailsInfo/advantage_graph.svg';
import {
  StyledAdvantagesContainer,
  StyledAdvantagesWrapper,
  StyledText,
} from '../CardProductAdvantages/CardProductAdvantages.styles';
import { ICardProductCashbacksProps } from './type';

export const CardProductCashbacks = ({ cardName }: ICardProductCashbacksProps) => {
  const { t } = useTranslation('cards');

  const translations = {
    firstCashbackTitle: t(`card_details.advantages.${cardName}.cashbacks.first_cashback.title`),
    firstCashbackDescription: t(
      `card_details.advantages.${cardName}.cashbacks.first_cashback.description`,
    ),
    secondCashbackTitle: t(`card_details.advantages.${cardName}.cashbacks.second_cashback.title`),
    secondCashbackDescription: t(
      `card_details.advantages.${cardName}.cashbacks.second_cashback.description`,
    ),
    thirdCashbackTitle: t(`card_details.advantages.${cardName}.cashbacks.third_cashback.title`),
    thirdCashbackDescription: t(
      `card_details.advantages.${cardName}.cashbacks.third_cashback.description`,
    ),
  };

  const cardCashbacksData = [
    {
      title: translations.firstCashbackTitle,
      description: translations.firstCashbackDescription,
    },
    {
      title: translations.secondCashbackTitle,
      description: translations.secondCashbackDescription,
    },
    {
      title: translations.thirdCashbackTitle,
      description: translations.thirdCashbackDescription,
    },
  ];

  return (
    <StyledAdvantagesContainer>
      <AdvantagesGraph />
      {cardCashbacksData.map(({ title, description }, index) => (
        <StyledAdvantagesWrapper width={196} marginTop={35} key={index}>
          <ATitle size={20} lineHeight={28} weight={400}>
            {title}
          </ATitle>
          <StyledText>{description}</StyledText>
        </StyledAdvantagesWrapper>
      ))}
    </StyledAdvantagesContainer>
  );
};
