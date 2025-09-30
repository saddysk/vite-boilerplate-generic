export interface IRouteMeta {
  requiresAuth: boolean;
  permissios: string[];
  roles: string[];
  isGuestRoute?: boolean;
}

export interface IRoute {
  path: string;
  name: string;
  meta: IRouteMeta;
}

export interface IRouteSelector {
  name?: string;
  path?: string;
}
