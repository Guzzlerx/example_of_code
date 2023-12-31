import { ReactNode } from 'react';

export interface IATitleProps {
  size: number;
  weight: number;
  lineHeight: number;
  color?: string;
  marginBottom?: number;
  children: ReactNode;
  dataTestId?: string;
  className?: string;
}
