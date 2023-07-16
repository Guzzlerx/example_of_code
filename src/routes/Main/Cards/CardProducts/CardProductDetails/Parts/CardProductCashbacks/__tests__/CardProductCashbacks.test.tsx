import { RenderResult, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { CARD_NAMES_ENUM } from 'constants/cards/cards';
import i18n from 'utils/languages/i18nForTests';
import { CardProductCashbacks } from '../CardProductCashbacks';

describe('CardProductCashbacks', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <I18nextProvider i18n={i18n}>
        <CardProductCashbacks cardName={CARD_NAMES_ENUM.UNIVERSAL_CARD} />
      </I18nextProvider>,
    );
  });

  it('should render correctly', () => {
    expect(renderResult.container).toBeInTheDocument();
  });

  it('snapshot', () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  it('render correctly with "infinity classic" card as prop', () => {
    renderResult.rerender(<CardProductCashbacks cardName={CARD_NAMES_ENUM.INFINITY_CLASSIC} />);

    const elements = screen.getAllByText(/cashback/i);

    expect(elements[0]).toBeInTheDocument();
    expect(elements[1]).toBeInTheDocument();
    expect(elements[2]).toBeInTheDocument();

    expect(
      screen.getByText(/On your first GPB 4,000 eligible purchases with/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/On your first GPB 4,000 eligible purchases on/i)).toBeInTheDocument();
    expect(screen.getByText(/On 5 categories of chosen products/i)).toBeInTheDocument();
  });

  it('render correctly with "infinity gold" card as prop', () => {
    renderResult.rerender(<CardProductCashbacks cardName={CARD_NAMES_ENUM.INFINITY_GOLD} />);

    const elements = screen.getAllByText(/cashback/i);

    expect(elements[0]).toBeInTheDocument();
    expect(elements[1]).toBeInTheDocument();
    expect(elements[2]).toBeInTheDocument();

    expect(screen.getByText(/On 5 categories of chosen products/i)).toBeInTheDocument();
    expect(
      screen.getByText(/On your first GPB 4,000 eligible purchases with/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/On all other eligible purchases/i)).toBeInTheDocument();
  });

  it('render correctly with "purchase plus" card as prop', () => {
    renderResult.rerender(<CardProductCashbacks cardName={CARD_NAMES_ENUM.PURCHASE_PLUS} />);

    const elements = screen.getAllByText(/cashback/i);

    expect(elements[0]).toBeInTheDocument();
    expect(elements[1]).toBeInTheDocument();
    expect(elements[2]).toBeInTheDocument();

    expect(
      screen.getByText(/On your first GPB 8,000 eligible purchases with a retailer you choose/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/On your first GPB 8,000 eligible purchases on your bills/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/On all other purchases at all amounts/i)).toBeInTheDocument();
  });
});
