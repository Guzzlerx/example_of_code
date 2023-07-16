import styled from 'styled-components';
import { COLOR_PALETTE } from 'constants/colors/colors';

export const PaymentSystemInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 87px;

  & p:last-of-type {
    margin-top: 16px;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const StyledTextContainer = styled.div`
  width: 416px;
  text-align: left;
`;

export const StyledSubtitle = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${COLOR_PALETTE.gray700};
`;

export const StyledContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 32px;
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledPaymentLink = styled.a`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${COLOR_PALETTE.notification};
`;
