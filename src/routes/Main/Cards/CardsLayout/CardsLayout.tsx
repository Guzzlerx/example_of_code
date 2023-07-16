import { Outlet } from 'react-router-dom';
import { StyledContainer } from './CardsLayout.styles';

export const CardsLayout = () => (
  <StyledContainer hasBreadCrumbs>
    <Outlet />
  </StyledContainer>
);
