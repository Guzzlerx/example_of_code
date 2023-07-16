import { RenderResult, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactComponent as ThreeDSecure } from 'assets/icons/cardProductBenefits/3d_secure.svg';
import { ReactComponent as AdditionalCashback } from 'assets/icons/cardProductBenefits/additional_cashback.svg';
import { ReactComponent as ATM } from 'assets/icons/cardProductBenefits/atm.svg';
import { ReactComponent as GiftCard } from 'assets/icons/cardProductBenefits/card_giftcard.svg';
import { ReactComponent as MoneyLimit } from 'assets/icons/cardProductBenefits/local_atm.svg';
import { ReactComponent as Insurance } from 'assets/icons/cardProductBenefits/medical_services.svg';
import { ReactComponent as Transfer } from 'assets/icons/cardProductBenefits/transfer.svg';
import { CARD_NAMES_ENUM } from 'constants/cards/cards';
import i18n from 'utils/languages/i18nForTests';
import { CardProductAdvantages } from '../CardProductAdvantages';

describe('CardProductAdvantages', () => {
  let renderResult: RenderResult;

  const data = [
    {
      title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.image_title`,
      descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description_1`,
      descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description_2`,
      descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description_3`,
      icon: <GiftCard />,
    },
    {
      title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.image_title`,
      descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description_1`,
      descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description_2`,
      descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description_3`,
      icon: <MoneyLimit />,
    },
    {
      title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.image_title`,
      descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description_1`,
      descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description_2`,
      descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description_3`,
      icon: <ATM />,
    },
    {
      title: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.image_title`,
      descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description_1`,
      descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description_2`,
      descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description_3`,
      icon: <Transfer />,
    },
  ];

  const rerenderData = [
    {
      title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.image_title`,
      descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.description_1`,
      descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.description_2`,
      descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.first_advantage.description_3`,
      icon: <ThreeDSecure />,
    },
    {
      title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.image_title`,
      descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.description_1`,
      descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.description_2`,
      descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.second_advantage.description_3`,
      icon: <ATM />,
    },
    {
      title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.image_title`,
      descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.description_1`,
      descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.description_2`,
      descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.third_advantage.description_3`,
      icon: <Insurance />,
    },
    {
      title: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.image_title`,
      descriptionPart1: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.description_1`,
      descriptionPart2: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.description_2`,
      descriptionPart3: `card_details.advantages.${CARD_NAMES_ENUM.INFINITY_PREMIUM}.icons.fourth_advantage.description_3`,
      icon: <AdditionalCashback />,
    },
  ];

  beforeEach(() => {
    renderResult = render(
      <I18nextProvider i18n={i18n}>
        <CardProductAdvantages cardName={CARD_NAMES_ENUM.UNIVERSAL_CARD} data={data} />
      </I18nextProvider>,
    );
  });

  it('should render correctly', () => {
    expect(renderResult.container).toBeInTheDocument();
  });

  it('snapshot', () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  it('icon container has correct width', () => {
    const element = screen.getByTitle(/Free card/i);

    expect(element).toHaveStyle('width: 64px');
  });

  it('render correctly with "infinity premium" card as prop', () => {
    renderResult.rerender(
      <CardProductAdvantages cardName={CARD_NAMES_ENUM.INFINITY_PREMIUM} data={rerenderData} />,
    );

    expect(screen.getByText(/Stay in control of your card security with/i)).toBeInTheDocument();
    expect(screen.getByText(/3-D/i)).toHaveStyle('font-weight: 700');

    expect(
      screen.getByText(/Withdraw money abroad without fees up to per month/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/£ 10,000/)).toHaveStyle('font-weight: 700');

    expect(
      screen.getByText(/Get insurance for your whole family while travelling abroad - \/person/),
    ).toBeInTheDocument();
    expect(screen.getByText(/£ 100,000/)).toHaveStyle('font-weight: 700');

    expect(
      screen.getByText(/Get your cashback - purchases, without any “ifs”/),
    ).toBeInTheDocument();
    expect(screen.getByText(/8% at all/)).toHaveStyle('font-weight: 700');
  });
});
