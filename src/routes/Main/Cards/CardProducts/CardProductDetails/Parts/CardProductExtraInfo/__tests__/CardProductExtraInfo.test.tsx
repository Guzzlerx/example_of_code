import { RenderResult, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { CARD_NAMES_ENUM } from 'constants/cards/cards';
import i18n from 'utils/languages/i18nForTests';
import { CardProductExtraInfo } from '../CardProductExtraInfo';
import { ICardProductExtraInfoProps } from '../type';

describe('CardProductExtraInfo', () => {
  let renderResult: RenderResult;

  const props: ICardProductExtraInfoProps = {
    cardName: CARD_NAMES_ENUM.SMART_PAYOUT,
  };

  const props2: ICardProductExtraInfoProps = {
    cardName: CARD_NAMES_ENUM.INFINITY_PREMIUM,
  };

  beforeEach(() => {
    renderResult = render(
      <I18nextProvider i18n={i18n}>
        <CardProductExtraInfo {...props} />
      </I18nextProvider>,
    );
  });

  it('should render correctly', () => {
    expect(renderResult.container).toBeInTheDocument();
  });

  it('snapshot', () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render the correct image for SMART_PAYOUT', () => {
    const element1 = screen.getByTestId('cryptoFlowersImage');
    expect(element1).toBeInTheDocument();
  });

  it('should render the correct image for INFINITY_PREMIUM', () => {
    renderResult.rerender(
      <I18nextProvider i18n={i18n}>
        <CardProductExtraInfo {...props2} />
      </I18nextProvider>,
    );

    const element2 = screen.getByTestId('chatBotImage');
    expect(element2).toBeInTheDocument();
  });
});
