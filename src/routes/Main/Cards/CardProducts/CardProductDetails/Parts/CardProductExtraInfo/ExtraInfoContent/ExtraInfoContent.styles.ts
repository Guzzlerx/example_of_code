import styled from 'styled-components';
import { ATitle } from 'components/ATitle/ATitle';
import { COLOR_PALETTE } from 'constants/colors/colors';

const { gray700 } = COLOR_PALETTE;

export const StyledSubtitle = styled(ATitle)<{ isOneColumn: boolean }>`
  text-align: left;
  width: ${props => (props.isOneColumn ? '526px' : '493px')};
  margin: 24px 0 16px;
  color: ${gray700};
`;

export const StyledContainer = styled.div<{ isOneColumn: boolean }>`
  flex-direction: column;
  text-align: left;
  max-width: 526px;
  padding-left: ${props => (props.isOneColumn ? '24px' : '72px')};
`;

export const StyledUl = styled.ul`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  margin-left: 25px;
  color: ${gray700};
`;

export const StyledLi = styled.li<{ isOneColumn: boolean }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  flex: ${props => (props.isOneColumn ? '1 1 100%' : '1 1 50%')};
  min-width: ${props => (props.isOneColumn ? '100%' : '50%')};
  margin-bottom: 8px;

  & strong {
    font-weight: 700;
  }
`;
