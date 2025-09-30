import { trimEnd } from 'lodash';
import { trimPath } from '../lib/utils/helpers/lodash.extended';
import { IRoute, IRouteMeta, IRouteSelector } from './routes.interface';

export const defaultMeta: Readonly<IRouteMeta> = {
  requiresAuth: true,
  permissios: [],
  roles: [],
};

export function privateRoute(name: string, path: string, meta?: Partial<IRouteMeta>): Readonly<IRoute> {
  return {
    path: trimPath(path),
    name,
    meta: {
      ...defaultMeta,
      ...meta,
      requiresAuth: true,
    },
  };
}

export function publicRoute(name: string, path: string, meta?: Partial<IRouteMeta>): Readonly<IRoute> {
  return {
    path: trimPath(path),
    name,
    meta: {
      ...defaultMeta,
      ...meta,
      requiresAuth: false,
    },
  };
}

export function useRoutes(routes: ReadonlyArray<IRoute>) {
  const isPublicRoute = (path: IRouteSelector | IRoute) => {
    const route = getRoute(path);
    if (route == null) {
      return false;
    }

    return route.meta.requiresAuth === false;
  };

  /**
   * Guest route is rouch which only non login user can access
   * @param path
   */
  const isGuestRoute = (path: IRouteSelector | IRoute) => {
    const route = getRoute(path);
    if (route == null) {
      return false;
    }

    return route.meta.isGuestRoute === true;
  };

  const isPrivateRoute = (path: IRouteSelector | IRoute) => {
    return !isPublicRoute(path);
  };

  const getRoute = ({ name, path }: IRouteSelector): IRoute => {
    let route: IRoute | undefined;
    if (name) {
      route = routes.find((r) => r.name === name);
    } else if (path) {
      route = routes.find((r) => r.path === trimEnd(path, '/'));
    }

    return (
      route ?? {
        name: name as string,
        path: path as string,
        meta: {
          permissios: [],
          requiresAuth: true,
          roles: [],
          isGuestRoute: false,
        },
      }
    );
  };

  return {
    isGuestRoute,
    isPrivateRoute,
    isPublicRoute,
    getRoute,
  };
}
