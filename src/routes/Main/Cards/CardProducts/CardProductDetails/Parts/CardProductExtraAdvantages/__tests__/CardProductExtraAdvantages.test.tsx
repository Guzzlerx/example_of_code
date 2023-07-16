import { RenderResult, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactComponent as Graph } from 'assets/icons/cardProductBenefits/deposit_graph.svg';
import { ReactComponent as EarnUp } from 'assets/icons/cardProductBenefits/earn_up.svg';
import { ReactComponent as Currency } from 'assets/icons/cardProductBenefits/euro_currency.svg';
import { ReactComponent as GracePeriod30 } from 'assets/icons/cardProductBenefits/grace_period.svg';
import { ReactComponent as MileProgram } from 'assets/icons/cardProductBenefits/mile_program.svg';
import { ReactComponent as Notifications } from 'assets/icons/cardProductBenefits/notifications.svg';
import { ReactComponent as Overdraft } from 'assets/icons/cardProductBenefits/overdraft.svg';
import { ReactComponent as VirtualCard } from 'assets/icons/cardProductBenefits/virtual_card.svg';
import { CARD_NAMES_ENUM } from 'constants/cards/cards';
import i18n from 'utils/languages/i18nForTests';
import { CardProductExtraAdvantages } from '../CardProductExtraAdvantages';

describe('CardProductExtraAdvantages component', () => {
  let renderResult: RenderResult;

  const data = [
    {
      title: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.image_title`,
      description: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.first_advantage.description`,
      icon: <Currency />,
    },
    {
      title: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.image_title`,
      description: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.second_advantage.description`,
      icon: <MileProgram />,
    },
    {
      title: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.image_title`,
      description: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.third_advantage.description`,
      icon: <Graph />,
    },
    {
      title: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.image_title`,
      description: `card_details.extra_advantages.${CARD_NAMES_ENUM.UNIVERSAL_CARD}.icons.fourth_advantage.description`,
      icon: <GracePeriod30 />,
    },
  ];

  const rerenderData = [
    {
      title: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.first_advantage.image_title`,
      description: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.first_advantage.description`,
      icon: <VirtualCard />,
    },
    {
      title: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.second_advantage.image_title`,
      description: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.second_advantage.description`,
      icon: <EarnUp />,
    },
    {
      title: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.third_advantage.image_title`,
      description: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.third_advantage.description`,
      icon: <Overdraft />,
    },
    {
      title: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.fourth_advantage.image_title`,
      description: `card_details.extra_advantages.${CARD_NAMES_ENUM.PURCHASE_PLUS}.icons.fourth_advantage.description`,
      icon: <Notifications />,
    },
  ];

  beforeEach(() => {
    renderResult = render(
      <I18nextProvider i18n={i18n}>
        <CardProductExtraAdvantages data={data} />
      </I18nextProvider>,
    );
  });

  it('should render correctly', () => {
    expect(renderResult.container).toBeInTheDocument();
  });

  it('snapshot', () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  it('render correct icon wrapper width', () => {
    const element = screen.getByTitle(/Grace period/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle('width: 64px');
  });

  it('render with another props', () => {
    renderResult.rerender(
      <I18nextProvider i18n={i18n}>
        <CardProductExtraAdvantages data={rerenderData} />
      </I18nextProvider>,
    );

    const description = screen.getByText(/Get yourself a virtual card to provide/i);
    const boldText = screen.getByText(/£ 2,000/i);

    expect(description).toBeInTheDocument();
    expect(boldText).toHaveStyle('font-weight: 700');
  });
});
