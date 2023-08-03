import React, { createContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Agents from './pages/agents';
import Customers from './pages/customers';
import Dashboard from './pages/dashboard';
import Games from './pages/games';
import Messages from './pages/messages';
import Rules from './pages/rules';
import Settings from './pages/settings';
import Statistics from './pages/statistics';
import Collections from './pages/collections';
import Feedback from './pages/feedback';
import Billing from './pages/billing';
import TicketWriter from './pages/ticket';
import Scores from './pages/scores';
import DeletedWagers from './pages/wagers';
import Pending from './pages/pending';
import CustomerAdmin from './pages/customer-admin';
import AddCustomer from './pages/customers';
import LiveLimits from './pages/live-limits';
import Cashier from './pages/cashier';
import Analysis from './pages/analysis';
import AgentPerformance from './pages/agents/Performance';
import NewCustomer from './pages/customers/NewCustomer';
import Transactions from './pages/transactions';
import IPTracker from './pages/ip-tracker';
import CustomerDetails from './pages/customers/CustomerDetails';
import SignIn from './pages/auth';
import Layout from './common/Layout';
import { useEffect } from 'react';
import { setupAuthAxios, setupPublicAxios } from 'setup/auth/axios';
import './App.css';
import { Navigate, useLocation, Routes, Route } from 'react-router-dom';
import paths from './common/Paths';

export const CurrentPageContext = createContext();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [accessToken, setAccessToken] = useState('');


  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setupPublicAxios(process.env.REACT_APP_BASE_URL);
    setupAuthAxios(process.env.REACT_APP_BASE_URL, accessToken);
  }, [accessToken]);


  console.log(accessToken, "accessToken")

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard />;
      case 'game-admin':
        return <Games />;
      case 'messages':
        return <Messages />;
      case 'rules':
        return <Rules />;
      case 'statistics':
        return <Statistics />;
      case 'agents':
        return <Agents />;
      case 'settings':
        return <Settings />;
      case 'collections':
        return <Collections />;
      case 'billing':
        return <Billing />;
      case 'agent-admin':
        return <Agents />;
      case 'ticket-writer':
        return <TicketWriter />;
      case 'deleted-wagers':
        return <DeletedWagers />;
      case 'pending':
        return <Pending />;
      case 'customer-admin':
        return <CustomerAdmin />;
      case 'customer-details':
        return <CustomerDetails />;
      case 'cashier':
        return <Cashier />;
      case 'live-limits':
        return <LiveLimits />;
      case 'add-customer':
        return <NewCustomer />;
      case 'agents-performance':
        return <AgentPerformance />;
      case 'analysis':
        return <Analysis />;
      case 'ip-tracker':
        return <IPTracker />;
      case 'transactions':
        return <Transactions />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ChakraProvider theme={theme}>
       <CurrentPageContext.Provider
        value={{
          currentPage,
          setCurrentPage,
          accessToken,
          setAccessToken,
          isModalOpen,
          isDrawerOpen,
          handleCloseModal,
          handleOpenModal,
          handleOpenDrawer,
          handleCloseDrawer,
        }}
      >
      <Routes>
        <Route path={paths.login} element={<SignIn />}></Route>
      </Routes>
        <RequireAuth>
          <Layout setCurrentPage={setCurrentPage}>{renderPage()}</Layout>
          {currentPage === 'feedback' && <Feedback />}
          <Scores />
        </RequireAuth>
      </CurrentPageContext.Provider>
    </ChakraProvider>
  );
};

export default App;

function RequireAuth({ children }) {
  let location = useLocation();

  if (!localStorage.bet_token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={paths.login} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
