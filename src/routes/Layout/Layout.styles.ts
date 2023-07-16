import styled from 'styled-components';
import { CONTAINER_WIDTH } from 'constants/styles';

export const StyledContainer = styled.div`
  max-width: ${CONTAINER_WIDTH};
  min-height: calc(100vh - 80px - 54px);
  margin: 0 auto;
  width: inherit;
`;
