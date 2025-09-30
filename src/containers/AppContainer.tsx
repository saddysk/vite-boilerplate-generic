import { FC, PropsWithChildren, ReactNode } from 'react';
import {
  Navigate,
  // useLocation
} from 'react-router-dom';
import { useAuth } from '../modules/auth';
// import { useUpdateEffect } from 'react-use';
// import { authApi } from '@/api';
// import { useQuery } from '@tanstack/react-query';
// import AppLoading from '@/components/AppLoading';

type AppContainerProps = PropsWithChildren & {
  loginPath?: string;
};

export const AppContainer: FC<AppContainerProps> = ({ children, loginPath = '/login' }) => {
  const { isAuthenticated, setUser, state } = useAuth();
  // const location = useLocation();

  // const { data: response, isLoading } = useQuery(
  //   ['authControllerGetCurrentUser'],
  //   authApi.authControllerGetCurrentUser,
  //   {
  //     enabled: state.accessToken != null,
  //     staleTime: 24 * 60 * 60 * 1000,
  //   }
  // );

  // useUpdateEffect(() => {
  //   if (response?.data?.id != null) {
  //     setUser({
  //       user: response.data,
  //     });
  //   }
  // }, [response, setUser]);

  if (!isAuthenticated()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={loginPath} />;
  }

  // if (isLoading || state.isLoading) {
  //   return (
  //     <div className='h-screen'>
  //       <AppLoading />
  //     </div>
  //   );
  // }

  // if (
  //   !state.user.organization?.id &&
  //   location.pathname !== '/onboarding' &&
  //   location.pathname !== '/logout'
  // ) {
  //   return <Navigate to='/onboarding' />;
  // }

  return <>{children}</>;
};

export function inAppContainer(Node: ReactNode) {
  return <AppContainer>{Node}</AppContainer>;
}

export default AppContainer;
