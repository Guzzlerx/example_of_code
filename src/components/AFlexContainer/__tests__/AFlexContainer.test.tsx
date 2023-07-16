import { RenderResult, render } from '@testing-library/react';
import { AFlexContainer } from '../AFlexContainer';

describe('AFlexContainer', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<AFlexContainer>CHILD</AFlexContainer>);
  });

  it('should render correctly', () => {
    expect(renderResult.container).toBeInTheDocument();
  });

  it('snapshot', () => {
    expect(renderResult.container).toMatchSnapshot();
  });
});
