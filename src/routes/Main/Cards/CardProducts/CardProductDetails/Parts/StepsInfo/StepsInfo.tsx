import { useTranslation } from 'react-i18next';
import { AIcon } from 'components/AIcon/AIcon';
import { ATitle } from 'components/ATitle/ATitle';
import {
  StepSubtitle,
  StepTitle,
  StepWrapper,
  StepsInfoContainer,
  StepsWrapper,
} from './StepsInfo.styles';

export const StepsInfo = () => {
  const { t } = useTranslation('cards');

  const translations = {
    title: t('card_details.steps_info.title'),
    firstStepOrder: t('card_details.steps_info.first_step.order'),
    firstStepTitle: t('card_details.steps_info.first_step.title'),
    firstStepSubtitle: t('card_details.steps_info.first_step.subtitle'),
    secondStepOrder: t('card_details.steps_info.second_step.order'),
    secondStepTitle: t('card_details.steps_info.second_step.title'),
    secondStepSubtitle: t('card_details.steps_info.second_step.subtitle'),
    thirdStepOrder: t('card_details.steps_info.third_step.order'),
    thirdStepTitle: t('card_details.steps_info.third_step.title'),
    thirdStepSubtitle: t('card_details.steps_info.third_step.subtitle'),
  };

  const stepsData = [
    {
      order: translations.firstStepOrder,
      title: translations.firstStepTitle,
      subtitle: translations.firstStepSubtitle,
    },
    {
      order: translations.secondStepOrder,
      title: translations.secondStepTitle,
      subtitle: translations.secondStepSubtitle,
    },
    {
      order: translations.thirdStepOrder,
      title: translations.thirdStepTitle,
      subtitle: translations.thirdStepSubtitle,
    },
  ];

  return (
    <StepsInfoContainer>
      <ATitle size={20} lineHeight={28} weight={700} marginBottom={40}>
        {translations.title}
      </ATitle>
      <StepsWrapper>
        {stepsData.map(({ order, title, subtitle }) => (
          <StepWrapper key={order}>
            <AIcon iconTitle={order} variant="stepsInfo">
              {order}
            </AIcon>
            <StepTitle>{title}</StepTitle>
            <StepSubtitle>{subtitle}</StepSubtitle>
          </StepWrapper>
        ))}
      </StepsWrapper>
    </StepsInfoContainer>
  );
};
