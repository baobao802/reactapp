import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { PrimaryLayout, SecondaryLayout } from '@/common/components';
import { authRoutes } from '@/modules/auth/configs';
import { dashboardRoutes } from '@/modules/dashboard/configs';

const NotFound = React.lazy(() => import('../404'));
const Forbidden = React.lazy(() => import('../403'));

const rootRoutes: RouteObject[] = [
  {
    element: <PrimaryLayout />,
    children: [dashboardRoutes],
  },
  {
    element: <SecondaryLayout />,
    children: [
      authRoutes,
      {
        path: '/',
        element: <Navigate to='/dashboard' replace />,
      },
      {
        path: '/404',
        element: <NotFound />,
      },
      {
        path: '/403',
        element: <Forbidden />,
      },
      {
        path: '*',
        element: <Navigate to='/404' replace />,
      },
    ],
  },
];

export default rootRoutes;
