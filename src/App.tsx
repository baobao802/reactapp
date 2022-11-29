import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, useNavigate, useRoutes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalProvider, useGlobalContext } from '@/contexts/GlobalContext';
import routes from './configs/routes';
import theme from './theme';
import './i18n/config';

function Pages() {
  const pages = useRoutes(routes);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { authenticated, keycloak } = useGlobalContext();

  // if (!keycloak) {
  //   return <div>Loading...</div>;
  // }

  return <Suspense fallback={<div>Loading...</div>}>{pages}</Suspense>;
}

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <ModalsProvider>
          <NotificationsProvider>
            <GlobalProvider>
              <QueryClientProvider client={queryClient}>
                <React.StrictMode>
                  <HelmetProvider>
                    <Pages />
                  </HelmetProvider>
                </React.StrictMode>
              </QueryClientProvider>
            </GlobalProvider>
          </NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
