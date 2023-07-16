import { useTranslation } from 'react-i18next';
import { AIcon } from 'components/AIcon/AIcon';
import { ATitle } from 'components/ATitle/ATitle';
import {
  StyledAdvantagesContainer,
  StyledAdvantagesWrapper,
  StyledContainer,
  StyledSpan,
  StyledText,
} from './CardProductAdvantages.styles';
import { CardProductAdvantagesItem } from './CardProductAdvantagesItem/CardProductAdvantagesItem';
import { ICardProductAdvantagesProps } from './type';

export const CardProductAdvantages = ({ cardName, data }: ICardProductAdvantagesProps) => {
  const { t } = useTranslation('cards');

  return (
    <StyledContainer>
      <ATitle size={20} weight={700} lineHeight={28} marginBottom={40}>
        {t('card_details.advantages.title')}
      </ATitle>
      <StyledAdvantagesContainer marginBottom={72}>
        {data.map(
          ({ title, descriptionPart1, descriptionPart2, descriptionPart3, icon }, index) => (
            <StyledAdvantagesWrapper width={180} key={index}>
              <AIcon iconTitle={t(title)} variant="cardAdvantages">
                {icon}
              </AIcon>
              <StyledText>
                {t(descriptionPart1)}
                <StyledSpan>{t(descriptionPart2)}</StyledSpan>
                {t(descriptionPart3)}
              </StyledText>
            </StyledAdvantagesWrapper>
          ),
        )}
      </StyledAdvantagesContainer>
      <CardProductAdvantagesItem cardName={cardName} />
    </StyledContainer>
  );
};
