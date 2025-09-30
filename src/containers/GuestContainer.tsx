/*
 * WHEN TO USE:
 * ---
 * Login pages
 * Registration forms
 * Landing pages
 * Password reset pages
 * Any public pages that authenticated users shouldn't see
 */

import { FC, PropsWithChildren, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/modules/auth';

type GuestContainerProps = PropsWithChildren & {
  fallbackPath?: string;
};

export const GuestContainer: FC<GuestContainerProps> = ({ children, fallbackPath = '/' }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated()) {
    return <Navigate to={fallbackPath} />;
  }

  return <>{children}</>;
};

export function inGuestContainer(Node: ReactNode) {
  return <GuestContainer>{Node}</GuestContainer>;
}

export default GuestContainer;
