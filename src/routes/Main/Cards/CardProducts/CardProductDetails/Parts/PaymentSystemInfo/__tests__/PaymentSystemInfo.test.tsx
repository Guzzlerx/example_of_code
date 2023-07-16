import { RenderResult, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { COLOR_PALETTE } from 'constants/colors/colors';
import i18n from 'utils/languages/i18nForTests';
import { PaymentSystemInfo } from '../PaymentSystemInfo';

describe('PaymentSystemInfo', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <I18nextProvider i18n={i18n}>
        <PaymentSystemInfo />
      </I18nextProvider>,
    );
  });

  it('should render correctly', () => {
    expect(renderResult.container).toBeInTheDocument();
  });

  it('snapshot', () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render component title correctly', () => {
    const element = screen.getByText(/Can’t decide what payment system to choose/i);

    expect(element).toBeInTheDocument();
  });

  it('visa link has correct href and text', () => {
    const element = screen.getAllByRole('link')[0];

    expect(element).toHaveAttribute('href', 'https://www.visa.com/');
    expect(element).toHaveTextContent(/All VISA Infinite benefits/i);
  });

  it('mastercard link has correct href and text', () => {
    const element = screen.getAllByRole('link')[1];

    expect(element).toHaveAttribute('href', 'https://www.mastercard.com/');
    expect(element).toHaveTextContent(/All Mastercard World Elite benefits/i);
  });

  it('first subtitle renders', () => {
    const element = screen.getByText(/There is no need to decide/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle(`color: ${COLOR_PALETTE.gray700}`);
  });

  it('second subtitle renders', () => {
    const element = screen.getByText(/1 account number, 2 cards with/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle(`color: ${COLOR_PALETTE.gray700}`);
  });
});
