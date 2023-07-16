import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'routes/Home/Home';
import { CardsLayout } from 'routes/Main/Cards/CardsLayout/CardsLayout';
import { MyCards } from 'routes/Main/Cards/MyCards/MyCards';
import { LoanProducts } from 'routes/Main/Loans/LoanProducts/LoanProducts';
import { LoansLayout } from 'routes/Main/Loans/LoansLayout/LoansLayout';
import { MyLoans } from 'routes/Main/Loans/MyLoans/MyLoans';
import MainMenu from 'routes/Main/Parts/MainMenu';
import { UserAccount } from 'routes/Main/UserAccount/UserAccount';
import { CongratsStep } from 'routes/Registration/Parts/CongratsStep/CongratsStep';
import { IDStep } from 'routes/Registration/Parts/IDStep/IDStep';
import { InitialEmailStep } from 'routes/Registration/Parts/InitialEmailStep/InitialEmailStep';
import { OTPStep } from 'routes/Registration/Parts/OTPStep/OTPStep';
import { PasswordStep } from 'routes/Registration/Parts/PasswordStep/PasswordStep';
import { PersonalDataStep } from 'routes/Registration/Parts/PersonalDataStep/PersonalDataStep';
import { SecurityQuestionStep } from 'routes/Registration/Parts/SecurityQuestionStep/SecurityQuestionStep';
import {
  APPLY_FOR_LOAN,
  BANK_BRANCHES_ATMS_PAGE,
  BETWEEN_MY_CARDS,
  BY_REQUISITES,
  CARDS,
  CARD_PRODUCTS,
  CONGRATS,
  CONTACTS_PAGE,
  CURRENCY_EXCHANGE,
  DEMO_MODE_PAGE,
  DEPOSITS,
  EXCHANGE_RATES_PAGE,
  HOME_PAGE,
  LEARN_MORE_PAGE,
  LOANS,
  LOAN_PRODUCTS,
  MY_CARDS,
  MY_LOANS,
  NOT_FOUND_PAGE,
  PASSWORD,
  PASSWORD_RECOVERY,
  PAYMENTS,
  PERSONAL_DATA,
  REGISTRATION_PAGE,
  ROOT_PAGE,
  SECURITY_QUESTION,
  TO_ANOTHER_CARD,
  TRANSFERS,
  TRANSFER_TYPE,
  USER_ACCOUNT,
  VERIFICATION,
} from 'constants/path';
import { CardProductDetails } from './Main/Cards/CardProducts/CardProductDetails/CardProductDetails';
import { CardProducts } from './Main/Cards/CardProducts/CardProducts';
import { CardProductsLayout } from './Main/Cards/CardProducts/CardProductsLayout/CardProductsLayout';
import { MyCardDetails } from './Main/Cards/MyCards/MyCardDetails/MyCardDetails';
import { MyCardsLayout } from './Main/Cards/MyCards/MyCardsLayout/MyCardsLayout';
import { LoanApplication } from './Main/Loans/LoanApplication/LoanApplication';
import { LoanApplicationProps } from './Main/Loans/LoanApplication/mockProps';
import { TransferProducts } from './Main/Transfers/TransferProducts/TransferProducts';
import { TransfersLayout } from './Main/Transfers/TransfersLayout/TransfersLayout';

const Main = lazy(() => import('routes/Main/Main'));
const BankBranchesAndATMs = lazy(() => import('routes/BankBranchesAndATMs/BankBranchesAndATMs'));
const ExchangeRates = lazy(() => import('routes/ExchangeRates/ExchangeRates'));
const Contacts = lazy(() => import('routes/Contacts/Contacts'));
const LearnMore = lazy(() => import('routes/LearnMore/LearnMore'));
const Registration = lazy(() => import('routes/Registration/Registration'));
const DemoMode = lazy(() => import('routes/DemoMode/DemoMode'));
const PasswordRecovery = lazy(() => import('routes/PasswordRecovery/PasswordRecovery'));

const preload = <div>Загрузка...</div>;
const notFound = 404;

export const Router = () => {
  return (
    <Routes>
      <Route
        path={ROOT_PAGE}
        element={
          <Suspense fallback={preload}>
            <Main />
          </Suspense>
        }
      >
        <Route index element={<MainMenu />} />
        <Route path={USER_ACCOUNT} element={<UserAccount />} />
        <Route path={CARDS} element={<CardsLayout />}>
          <Route index element={<Navigate to={MY_CARDS} replace />} />
          <Route path={MY_CARDS} element={<MyCardsLayout />}>
            <Route index element={<MyCards />} />
            <Route path=":cardName" element={<MyCardDetails />} />
          </Route>
          <Route path={CARD_PRODUCTS} element={<CardProductsLayout />}>
            <Route index element={<CardProducts />} />
            <Route path=":cardName" element={<CardProductDetails />} />
          </Route>
        </Route>
        <Route path={LOANS} element={<LoansLayout />}>
          <Route index element={<Navigate to={MY_LOANS} replace />} />
          <Route path={MY_LOANS} element={<MyLoans />} />
          <Route path={LOAN_PRODUCTS} element={<LoanProducts />} />
          <Route
            path={APPLY_FOR_LOAN}
            element={<LoanApplication {...LoanApplicationProps}></LoanApplication>}
          />
        </Route>
        <Route path={DEPOSITS} element={<div>DEPOSITS</div>} />
        <Route path={PAYMENTS} element={<div>PAYMENTS</div>} />
        <Route path={TRANSFERS} element={<TransfersLayout />}>
          <Route index element={<Navigate to={TRANSFER_TYPE} replace />} />
          <Route path={TRANSFER_TYPE} element={<TransferProducts />} />
          <Route path={BETWEEN_MY_CARDS} element={<div>BETWEEN MY CARDS</div>} />
          <Route path={TO_ANOTHER_CARD} element={<div>TO ANOTHER CARD</div>} />
          <Route path={BY_REQUISITES} element={<div>BY REQUISITES</div>} />
          <Route path={CURRENCY_EXCHANGE} element={<div>CURRENCY EXCHANGE</div>} />
        </Route>
      </Route>
      <Route
        path={HOME_PAGE}
        element={
          <Suspense fallback={preload}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={BANK_BRANCHES_ATMS_PAGE}
        element={
          <Suspense fallback={preload}>
            <BankBranchesAndATMs />
          </Suspense>
        }
      />
      <Route
        path={EXCHANGE_RATES_PAGE}
        element={
          <Suspense fallback={preload}>
            <ExchangeRates />
          </Suspense>
        }
      />
      <Route
        path={CONTACTS_PAGE}
        element={
          <Suspense fallback={preload}>
            <Contacts />
          </Suspense>
        }
      />
      <Route
        path={LEARN_MORE_PAGE}
        element={
          <Suspense fallback={preload}>
            <LearnMore />
          </Suspense>
        }
      />
      <Route
        path={REGISTRATION_PAGE}
        element={
          <Suspense fallback={preload}>
            <Registration />
          </Suspense>
        }
      >
        <Route index element={<InitialEmailStep />} />
        <Route path={VERIFICATION} element={<OTPStep />} />
        <Route path={PERSONAL_DATA} element={<PersonalDataStep />} />
        <Route path={PASSWORD} element={<PasswordStep variant="signup" />} />
        <Route path={SECURITY_QUESTION} element={<SecurityQuestionStep />} />
        <Route path={CONGRATS} element={<CongratsStep variant="signup" />} />
      </Route>
      <Route
        path={DEMO_MODE_PAGE}
        element={
          <Suspense fallback={preload}>
            <DemoMode />
          </Suspense>
        }
      />
      <Route
        path={PASSWORD_RECOVERY}
        element={
          <Suspense fallback={preload}>
            <PasswordRecovery />
          </Suspense>
        }
      >
        <Route index element={<IDStep />} />
        <Route path={VERIFICATION} element={<OTPStep />} />
        <Route path={PASSWORD} element={<PasswordStep variant="recovery" />} />
        <Route path={CONGRATS} element={<CongratsStep variant="recovery" />} />
      </Route>
      <Route path={NOT_FOUND_PAGE} element={notFound} />
    </Routes>
  );
};
