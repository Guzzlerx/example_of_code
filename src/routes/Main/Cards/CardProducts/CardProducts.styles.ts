import styled from 'styled-components';
import { ATitle } from 'components/ATitle/ATitle';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 730px;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledATitle = styled(ATitle)`
  margin-top: 16px;
  text-align: left;
`;
