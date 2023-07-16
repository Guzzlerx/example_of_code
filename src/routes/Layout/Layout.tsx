import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { StyledContainer } from './Layout.styles';
import { ILayoutProps } from './type';

export const Layout = ({ children }: ILayoutProps) => (
  <>
    <Header />
    <StyledContainer data-testid="layout">{children}</StyledContainer>
    <Footer />
  </>
);
