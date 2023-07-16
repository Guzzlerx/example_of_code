import { RenderResult, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import i18n from 'utils/languages/i18nForTests';
import { CardsLayout } from '../CardsLayout';

describe('CardsLayout', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <MemoryRouter initialEntries={['/cards/child']}>
        <I18nextProvider i18n={i18n}>
          <Routes>
            <Route path="cards" element={<CardsLayout />}>
              <Route path="child" element={<div>CHILD</div>} />
            </Route>
          </Routes>
        </I18nextProvider>
      </MemoryRouter>,
    );
  });

  it('should render correctly', () => {
    expect(renderResult.container).toBeInTheDocument();
  });

  it('snapshot', () => {
    expect(renderResult.container).toMatchSnapshot();
  });

  it('should render Outlet correctly', () => {
    const outlet = screen.getByText(/child/i);

    expect(outlet).toBeInTheDocument();
  });
});
