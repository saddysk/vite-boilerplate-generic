import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import DashboardRoutes from './DashboardRoutes';

export const AppRoutes: FC = () => {
  const routes = useRoutes([
    ...AuthRoutes,
    ...DashboardRoutes,
    {
      path: '*',
      element: <div className='NotFound'>Not found</div>,
    },
    {
      path: '403',
      element: <div className='Unauthorized'>Unauthorized</div>,
    },
  ]);

  return routes;
};

export default AppRoutes;
