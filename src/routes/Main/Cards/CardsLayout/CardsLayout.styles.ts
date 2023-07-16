import styled from 'styled-components';

export const StyledContainer = styled.section<{ hasBreadCrumbs?: boolean }>`
  margin-top: ${props => (props.hasBreadCrumbs ? '32px' : '64px')};
  flex: 1;
  padding-left: 100px;
`;
