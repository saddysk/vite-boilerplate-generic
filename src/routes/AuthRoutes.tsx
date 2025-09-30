import loadable from '@loadable/component';
import Layout from '../layouts/Layout';
import { inAppContainer } from '../containers/AppContainer';
import { inGuestContainer } from '../containers/GuestContainer';
import { LoginProvider } from '@/components/auth/Login/LoginProvider';

const Logout = loadable(() => import('@/views/login/Logout'));
const Login = loadable(() => import('../views/login/Login'));

export default [
  {
    path: '/login',
    element: inGuestContainer(
      <Layout>
        <LoginProvider>
          <Login />
        </LoginProvider>
      </Layout>
    ),
  },
  {
    path: '/logout',
    element: inAppContainer(<Logout />),
  },
];
