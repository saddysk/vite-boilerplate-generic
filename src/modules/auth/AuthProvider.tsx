import constate from 'constate';
import jwtDecode from 'jwt-decode';
import { isEmpty } from 'lodash';
import { useReducer, useCallback, useMemo } from 'react';
import { useLocalStorage } from 'react-use';
import { IAuthState } from './types';
import { UserAccountType, UserStatus } from '@/api/data-contracts';

// export type ICanArgs = { permissions: string[]; roles?: string[] };
// type ICanUserFn = (check: ICanArgs) => boolean;

export interface IUseAuthStateProps {
  initialState?: IAuthState;
  onSingOut?: () => void;
  accessTokenKey?: string;
  refreshTokenKey?: string;
}

const ACCESS_TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh-token';

const initialAuthData: IAuthState = {
  accessToken: '',
  refreshToken: '',
  error: '',
  user: {
    id: '',
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    status: UserStatus.Pending,
    accountType: UserAccountType.Email,
  },
  token: {
    token_type: '',
    exp: 0,
    jti: '',
    user_id: 4,
    name: '',
    email: '',
    organization: '',
    domain: '',
    role: 1,
    timezone: '',
  },
  isLoading: true,
  isLoggedOut: false,
};

type SET_TOKEN_DATA = {
  type: 'SET_TOKEN_DATA';
  payload: Pick<IAuthState, 'accessToken' | 'refreshToken'>;
};

type UPDATE_TOKEN_DATA = {
  type: 'UPDATE_TOKEN_DATA';
  payload: Pick<IAuthState, 'accessToken' | 'refreshToken'>;
};

type SET_USER_PROFILE = {
  type: 'SET_USER_PROFILE';
  payload: Pick<IAuthState, 'user'>;
};

type LOGOUT = {
  type: 'LOGOUT';
  payload: Partial<IAuthState>;
};

type Actions = SET_TOKEN_DATA | UPDATE_TOKEN_DATA | SET_USER_PROFILE | LOGOUT;

// export const resetLocalStorage = () => {
//   localStorage.removeItem("last-active");
//   localStorage.removeItem("keepLogged");
//   localStorage.removeItem("access");
//   localStorage.removeItem("refresh");
// };
// export const setLocalStorage = (
//   currentTime: any,
//   access: any,
//   refresh: any
// ) => {
//   localStorage.setItem("last-active", currentTime);
//   localStorage.setItem("access", access);
//   localStorage.setItem("refresh", refresh);
// };

// Our reducer function that uses a switch statement to handle our actions
const authStateReducer = (state: IAuthState, action: Actions): IAuthState => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_TOKEN_DATA':
      return {
        ...state,
        isLoading: false,
        error: '',
        token: jwtDecode(payload.accessToken),
        ...payload,
      };
    case 'UPDATE_TOKEN_DATA':
      return {
        ...state,
        error: '',
        isLoading: false,
        ...payload,
        token: jwtDecode(payload.accessToken),
        isLoggedOut: false,
      };
    case 'SET_USER_PROFILE':
      return {
        ...state,
        user: payload.user,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...initialAuthData,
        ...payload,
        isLoggedOut: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useAuthStateValue = (props: IUseAuthStateProps) => {
  const {
    initialState = initialAuthData,
    onSingOut,
    accessTokenKey = ACCESS_TOKEN_KEY,
    refreshTokenKey = REFRESH_TOKEN_KEY,
  } = props;

  const [access, setAccess, removeAccess] = useLocalStorage<string>(accessTokenKey);
  const [refresh, setRefresh, removeRefresh] = useLocalStorage<string>(refreshTokenKey);

  const [internalState, dispatch] = useReducer(authStateReducer, {
    ...initialState,
    user: { ...initialState.user },
  });

  const state = useMemo((): IAuthState => {
    return {
      ...internalState,
      accessToken: access,
      refreshToken: refresh,
    };
  }, [internalState, access, refresh]);

  const isAuthenticated = useCallback(() => {
    if (!isEmpty(access)) {
      return true;
    } else {
      return false;
    }
  }, [access]);

  const setToken = useCallback(
    (data: SET_TOKEN_DATA['payload']) => {
      dispatch({
        type: 'SET_TOKEN_DATA',
        payload: data,
      });

      setAccess(data.accessToken);
      setRefresh(data.refreshToken);
    },
    [dispatch, setAccess, setRefresh]
  );

  const setUser = useCallback(
    (data: SET_USER_PROFILE['payload']) => {
      dispatch({
        type: 'SET_USER_PROFILE',
        payload: data,
      });
    },
    [dispatch]
  );

  const logout = useCallback(
    async (data: LOGOUT['payload']) => {
      dispatch({
        type: 'LOGOUT',
        payload: data,
      });

      removeAccess();
      removeRefresh();
      onSingOut?.();
    },
    [dispatch, onSingOut, removeAccess, removeRefresh]
  );

  return {
    state,
    isAuthenticated,
    dispatch,
    setToken,
    setUser,
    logout,
  };
};

const [AuthProvider, useAuth] = constate(useAuthStateValue);
AuthProvider.displayName = 'AuthProvider';

export { AuthProvider, useAuth };
