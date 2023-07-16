import { ElementType, FocusEventHandler, MouseEventHandler, ReactNode } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

export interface IAFlexContainerProps {
  children: ReactNode;
  styles?: FlattenSimpleInterpolation;
  renderAs?: ElementType;
  className?: string;
  dataTestId?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  onFocus?: FocusEventHandler<HTMLElement>;
  onBlur?: FocusEventHandler<HTMLElement>;
  isNonFlexible?: boolean;
  flex?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'baseline';
  gap?: string;
}
