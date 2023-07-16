import styled from 'styled-components';
import { COLOR_PALETTE } from 'constants/colors/colors';

export const StepsInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  margin: 72px 0 87px 0;
`;

export const StepsWrapper = styled.div`
  display: flex;
  gap: 38px;
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  text-align: left;
  width: 292px;
`;

export const StepTitle = styled.div`
  font-size: 20px;
  line-height: 28px;
  margin-top: 24px;
`;

export const StepSubtitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${COLOR_PALETTE.gray700};
  margin-top: 8px;
`;
