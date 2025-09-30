/*
 * WHEN TO USE:
 * ---
 * You only need to show/hide UI elements based on auth status
 * Implementing conditional rendering (login button vs logout button)
 * Simple authentication checks without needing user details
 */

import * as React from 'react';
import { useAuth } from '../AuthProvider';

/**
 * @interface withAuthHeaderProps
 */
export interface withAuthHeaderProps {
  isAuth: boolean;
}

/**
 * @public
 * @function
 * @name withIsAuthenticated
 * @description Inject Authentication status inside the Component's Prop
 * @param Component
 */
export function withIsAuthenticated<P extends withAuthHeaderProps>(
  Component: React.ComponentType<P>
): React.FunctionComponent<P> {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated()) {
      return <Component {...props} isAuth={false} />;
    }

    return <Component {...props} isAuth={true} />;
  };
}

export default withIsAuthenticated;
