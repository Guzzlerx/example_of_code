import { RenderResult, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { CARD_NAMES_ENUM } from 'constants/cards/cards';
import i18n from 'utils/languages/i18nForTests';
import { ICardProductExtraInfoProps } from '../../type';
import { ExtraInfoContent } from '../ExtraInfoContent';

describe('ExtraInfoContent', () => {
  let renderResult: RenderResult;

  const props: ICardProductExtraInfoProps = {
    cardName: CARD_NAMES_ENUM.SMART_PAYOUT,
  };

  beforeEach(() => {
    renderResult = render(
      <I18nextProvider i18n={i18n}>
        <ExtraInfoContent {...props} />
      </I18nextProvider>,
    );
  });

  it('should render correctly', () => {
    expect(renderResult.container).toBeInTheDocument();
  });

  it('snapshot', () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render title correctly', () => {
    const element = screen.getByText(/Searching for a new way of getting money?/i);

    expect(element).toBeInTheDocument();
  });

  it('should render subtitle correctly', () => {
    const element = screen.getByText(
      /Thanks to a new program, provided by our bank, you have a possibility to open a deposit account in any type of crypto. This is what you get:/i,
    );

    expect(element).toBeInTheDocument();
  });

  it('should render listItems correctly', () => {
    const element = screen.getByText(
      /Diversification. Adding crypto savings to your portfolio can help mitigate risk;/i,
    );

    expect(element).toBeInTheDocument();
  });
});
