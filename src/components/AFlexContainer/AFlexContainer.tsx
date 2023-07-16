import { forwardRef } from 'react';
import { StyledContainer } from './AFlexContainer.styles';
import { IAFlexContainerProps } from './type';

export const AFlexContainer = forwardRef(
  (
    { renderAs = 'div', children, onFocus, onBlur, dataTestId, ...restProps }: IAFlexContainerProps,
    ref,
  ) => (
    <StyledContainer
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
      data-testid={dataTestId}
      as={renderAs}
      {...restProps}
    >
      {children}
    </StyledContainer>
  ),
);
