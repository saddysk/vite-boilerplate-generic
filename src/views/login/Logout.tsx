import { FC } from 'react';
import { useAuth } from '@/modules/auth';
import { Navigate } from 'react-router-dom';

interface LogoutProps {}

export declare type LoginMethod = 'email' | 'wallet';

// Just for development purpose
// Don't use in production
const Logout: FC<LogoutProps> = () => {
  const { logout } = useAuth();

  logout({});

  return <Navigate to={'/login'} />;
};

export default Logout;
