import React from 'react';

import { PageRoute } from '@core/modules/custom-router-dom/router.interface';

const Users = React.lazy(() => import('./containers/Users'));
const UserDetail = React.lazy(() => import('./containers/UserDetail'));

const usersRoutes: PageRoute[] = [
  {
    path: '/users',
    isProtected: false,
    element: Users
  },
  {
    path: '/user/:id',
    isProtected: false,
    element: UserDetail
  }
];

export default usersRoutes;
