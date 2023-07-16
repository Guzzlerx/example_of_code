import { RenderResult, render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'utils/languages/i18nForTests';
import { StepsInfo } from '../StepsInfo';

describe('StepsInfo', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <I18nextProvider i18n={i18n}>
        <StepsInfo />
      </I18nextProvider>,
    );
  });

  it('component should render', () => {
    expect(renderResult.container).toBeInTheDocument();
  });

  it('snapshot', () => {
    expect(renderResult.container).toMatchSnapshot();
  });
});
