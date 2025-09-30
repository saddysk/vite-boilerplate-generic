import { AuthUserDto } from '@/api/data-contracts';

/**
 * Universal types
 */
export interface IAuthState {
  accessToken: string;
  user: IAuthUser;
  refreshToken?: string;
  error: string;
  token: IDecodedJWT;
  isLoading: boolean;
  isLoggedOut?: boolean;
}

export interface IDecodedJWT {
  token_type: string;
  exp: number;
  jti: string;
  user_id: 4;
  name: string;
  email: string;
  organization: string;
  domain: string;
  role: 1 | 2;
  timezone: string;
}

export interface IAuthUser extends AuthUserDto {}
