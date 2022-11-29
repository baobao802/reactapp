import { ConfigProvider, Spin } from 'antd';
import moment from 'moment';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, useNavigate, useRoutes } from 'react-router-dom';
import { GlobalProvider, useGlobalContext } from '@/contexts/GlobalContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from './configs';
import 'antd/dist/reset.css'; // https://ant.design/docs/react/customize-theme
import 'moment/locale/vi';
import './i18n/config';

moment().locale('vi');

function Pages() {
  const pages = useRoutes(routes);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { authenticated, keycloak } = useGlobalContext();

  if (!keycloak) {
    return <div>Loading...</div>;
  }

  return <Suspense fallback={<Spin size='large' />}>{pages}</Suspense>;
}

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <ConfigProvider>
        <GlobalProvider>
          <QueryClientProvider client={queryClient}>
            <React.StrictMode>
              <HelmetProvider>
                <Pages />
              </HelmetProvider>
            </React.StrictMode>
          </QueryClientProvider>
        </GlobalProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
