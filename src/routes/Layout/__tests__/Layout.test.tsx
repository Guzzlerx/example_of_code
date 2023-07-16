import { configureStore } from '@reduxjs/toolkit';
import { RenderResult, render, screen } from '@testing-library/react';
import { rootReducer } from 'redux/store';
import { WithProviders } from 'utils/WithProviders/WithProviders';
import i18n from 'utils/languages/i18nForTests';
import { Layout } from '../Layout';

describe('Layout', () => {
  let renderResult: RenderResult;
  const mockStore = configureStore({ reducer: rootReducer });

  beforeEach(() => {
    renderResult = render(WithProviders(<Layout>child</Layout>, { i18n, store: mockStore }));
  });

  it('should render correctly', () => {
    const element = screen.getByTestId('layout');

    expect(element).toBeInTheDocument();
  });

  it('snapshot', () => {
    const element = screen.getByTestId('layout');

    expect(element).toMatchSnapshot();
  });
});
