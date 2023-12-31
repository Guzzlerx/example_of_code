import { RenderResult, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BUTTON_COLORS } from 'constants/colors/colors';
import { AButton } from '../AButton';
import { IAButtonProps } from '../type';

describe('AButton', () => {
  const props: IAButtonProps = {
    variant: 'primary',
    children: 'Button',
    onClick: jest.fn(),
    isDisabled: false,
    size: 'small',
    type: 'button',
  };
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<AButton {...props} />);
  });

  it('should render correctly', () => {
    const element = screen.getByRole(/button/i);

    expect(element).toBeInTheDocument();
    expect(element.innerHTML).toBe('Button');
  });

  it('snapshot', () => {
    const element = screen.getByRole(/button/i);

    expect(element).toMatchSnapshot();
  });

  it('action function should be invoked after click', () => {
    const element = screen.getByRole(/button/i);

    userEvent.click(element);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should not react on click if disabled prop was passed ', () => {
    renderResult.rerender(<AButton {...props} isDisabled />);

    const element = screen.getByRole(/button/i);

    expect(element).toBeDisabled();
    userEvent.click(element);
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });

  it('handles property variant correctly', () => {
    renderResult.rerender(<AButton {...props} variant="secondary" />);

    const element = screen.getByRole(/button/i);

    expect(element).toHaveStyle({ background: BUTTON_COLORS.secondaryDefault });
  });

  it('handles property size correctly', () => {
    const element = screen.getByRole(/button/i);

    expect(element).toHaveStyle({ width: '143px', height: '48px' });
  });

  it('handles property size correctly', () => {
    renderResult.rerender(<AButton {...props} size="large" />);

    const element = screen.getByRole(/button/i);

    expect(element).toHaveStyle({ width: '343px', height: '56px' });
  });

  it('handles property size correctly', () => {
    renderResult.rerender(<AButton {...props} size="medium" />);

    const element = screen.getByRole(/button/i);

    expect(element).toHaveStyle({ width: '171px', height: '56px' });
  });

  it('handles property size correctly', () => {
    renderResult.rerender(<AButton {...props} size="extraSmall" />);

    const element = screen.getByRole(/button/i);

    expect(element).toHaveStyle({ width: '48px', height: '48px' });
  });

  it('handles property type correctly', () => {
    const element = screen.getByRole(/button/i);

    expect(element).toHaveAttribute('type', 'button');
  });

  it('handles property type correctly', () => {
    renderResult.rerender(<AButton {...props} type="submit" />);

    const element = screen.getByRole(/button/i);

    expect(element).toHaveAttribute('type', 'submit');
  });

  it('handles property type correctly', () => {
    renderResult.rerender(<AButton {...props} type="reset" />);

    const element = screen.getByRole(/button/i);

    expect(element).toHaveAttribute('type', 'reset');
  });
});
