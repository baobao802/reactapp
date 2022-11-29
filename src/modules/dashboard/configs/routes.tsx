import React from 'react';
import { RouteObject } from 'react-router-dom';
import { GuardRoute } from '@/common/helpers';
import { Role } from '@/common/types';

const Dashboard = React.lazy(() => import('../pages'));

const dashboardRoutes: RouteObject = {
  path: '/dashboard',
  children: [
    {
      index: true,
      // element: <GuardRoute roles={[Role.APP_USER]} component={Dashboard} />,
      element: <Dashboard />,
    },
  ],
};

export default dashboardRoutes;
