import { Trans, useTranslation } from 'react-i18next';
import { AIcon } from 'components/AIcon/AIcon';
import { ATitle } from 'components/ATitle/ATitle';
import {
  StyledAdvantagesContainer,
  StyledAdvantagesWrapper,
  StyledContainer,
  StyledText,
} from '../CardProductAdvantages/CardProductAdvantages.styles';
import { ICardProductExtraAdvantagesProps } from './types';

export const CardProductExtraAdvantages = ({ data }: ICardProductExtraAdvantagesProps) => {
  const { t } = useTranslation('cards');

  return (
    <StyledContainer>
      <ATitle size={20} weight={700} lineHeight={28} marginBottom={40}>
        {t('card_details.extra_advantages.title')}
      </ATitle>
      <StyledAdvantagesContainer marginBottom={72}>
        {data.map(({ title, icon, description }, index) => (
          <StyledAdvantagesWrapper width={180} key={index}>
            <AIcon iconTitle={t(title)} variant="cardAdvantages">
              {icon}
            </AIcon>
            <StyledText>
              <Trans>{t(description)}</Trans>
            </StyledText>
          </StyledAdvantagesWrapper>
        ))}
      </StyledAdvantagesContainer>
    </StyledContainer>
  );
};
