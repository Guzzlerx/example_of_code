import styled from 'styled-components';
import { COLOR_PALETTE } from 'constants/colors/colors';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const StyledAdvantagesContainer = styled.div<{ marginBottom?: number }>`
  display: flex;
  gap: 40px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const StyledAdvantagesWrapper = styled.div<{ width: number; marginTop?: number }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: ${({ width }) => width}px;
  margin-top: ${({ marginTop }) => marginTop}px;
`;

export const StyledText = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${COLOR_PALETTE.gray700};

  & strong {
    font-weight: 700;
    font-size: 14px;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 700;
  font-size: 14px;
`;
