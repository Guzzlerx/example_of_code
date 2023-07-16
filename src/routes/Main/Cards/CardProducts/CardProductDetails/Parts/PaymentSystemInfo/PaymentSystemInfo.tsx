import { useTranslation } from 'react-i18next';
import { AIcon } from 'components/AIcon/AIcon';
import { ATitle } from 'components/ATitle/ATitle';
import { ReactComponent as MastercardLogo } from 'assets/icons/mastercard_logo.svg';
import { ReactComponent as VISALogo } from 'assets/icons/visa_blue.svg';
import { ReactComponent as PaymentInfoLogo } from 'assets/image/cardDetailsInfo/man_with_many_cards.svg';
import { LinksEnum } from 'constants/links';
import {
  PaymentSystemInfoContainer,
  StyledContainer,
  StyledIconWrapper,
  StyledInfoContainer,
  StyledPaymentLink,
  StyledSubtitle,
  StyledTextContainer,
} from './PaymentSystemInfo.styles';

export const PaymentSystemInfo = () => {
  const { t } = useTranslation('cards');

  const translations = {
    title: t('card_details.payment_info.title'),
    firstSubtitle: t('card_details.payment_info.first_subtitle'),
    secondSubtitle: t('card_details.payment_info.second_subtitle'),
    visaText: t('card_details.payment_info.visa_text'),
    mastercardText: t('card_details.payment_info.mastercard_text'),
  };

  const CARDS_CONFIG = [
    {
      id: 0,
      title: 'VISA',
      link: LinksEnum.Visa,
      linkText: translations.visaText,
      logo: <VISALogo />,
    },
    {
      id: 1,
      title: 'Mastercard',
      link: LinksEnum.Mastercard,
      linkText: translations.mastercardText,
      logo: <MastercardLogo />,
    },
  ];

  return (
    <PaymentSystemInfoContainer>
      <StyledInfoContainer>
        <StyledTextContainer>
          <ATitle size={20} lineHeight={28} weight={700} marginBottom={24}>
            {translations.title}
          </ATitle>
          <StyledSubtitle>{translations.firstSubtitle}</StyledSubtitle>
          <StyledSubtitle>{translations.secondSubtitle}</StyledSubtitle>
        </StyledTextContainer>
        <StyledContainer>
          {CARDS_CONFIG.map(({ id, link, linkText, title, logo }) => (
            <StyledIconWrapper key={id}>
              <AIcon variant="paymentSystem" iconTitle={title}>
                {logo}
              </AIcon>
              <StyledPaymentLink href={link} target={'_blank'}>
                {linkText}
              </StyledPaymentLink>
            </StyledIconWrapper>
          ))}
        </StyledContainer>
      </StyledInfoContainer>
      <PaymentInfoLogo />
    </PaymentSystemInfoContainer>
  );
};
