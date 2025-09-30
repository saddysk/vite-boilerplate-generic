/*
 * WHEN TO USE:
 * ---
 * You need to display user information (name, avatar, email)
 * Implementing user-specific functionality
 * Need access to user permissions, roles, or other profile data
 * Building user dashboards or profile pages
 */

import * as React from 'react';
import { useAuth } from '../AuthProvider';
import { IAuthState } from '../types';

/**
 * @interface withAuthProps
 */
export interface withAuthProps {
  authUser?: IAuthState['user'];
}

/**
 * @function
 * @name withAuthUser
 * @description Inject Authenticated User's state inside the Component's Prop
 * @param Component
 */
export function withAuthUser<P extends withAuthProps>(
  Component: React.ComponentType<P>
): React.FunctionComponent<P> {
  // eslint-disable-next-line react/display-name
  return (props: P) => {
    const { state, isAuthenticated } = useAuth();

    if (!isAuthenticated()) {
      return <Component {...props} authUser={null} />;
    }

    return <Component {...props} authUser={state.user} />;
  };
}

/**
 * @exports withAuthUser
 */
export default withAuthUser;
