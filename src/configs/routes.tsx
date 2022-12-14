import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { PrimaryAppShell } from '@/common/components';
import { authRoutes } from '@/modules/auth/configs';
import { dashboardRoutes } from '@/modules/dashboard/configs';

const NotFound = React.lazy(() => import('../404'));
const InternalServerError = React.lazy(() => import('../500'));
const ServerOverload = React.lazy(() => import('../503'));

const rootRoutes: RouteObject[] = [
  {
    element: <PrimaryAppShell />,
    children: [dashboardRoutes],
  },
  {
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
        path: '/500',
        element: <InternalServerError />,
      },
      {
        path: '/503',
        element: <ServerOverload />,
      },
      {
        path: '*',
        element: <Navigate to='/404' replace />,
      },
    ],
  },
];

export default rootRoutes;
