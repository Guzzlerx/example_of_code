import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'routes';
import { Layout } from 'routes/Layout/Layout';
import { AppStyle } from './AppStyle';

function App() {
  return (
    <AppStyle>
      <BrowserRouter>
        <HelmetProvider>
          <Layout>
            <Helmet>
              <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet"
              />
            </Helmet>
            <Router />
          </Layout>
        </HelmetProvider>
      </BrowserRouter>
    </AppStyle>
  );
}

export default App;
