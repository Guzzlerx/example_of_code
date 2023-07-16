import styled from 'styled-components';
import { IAFlexContainerProps } from './type';

export const StyledContainer = styled.div<IAFlexContainerProps>`
  display: ${({ isNonFlexible }) => (isNonFlexible ? 'block' : 'flex')};
  ${({ styles }) => styles}
  flex: ${({ flex }) => flex};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};
`;
