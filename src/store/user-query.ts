import { createQueryKeys } from '@lukemorales/query-key-factory';
import { Parameter } from './api';
import { userApi } from '@/api';
import { User } from '@/api/User';

export const userQuery = createQueryKeys('user', {
  info: (query: Parameter<User['userControllerGetUserInfo']> = {}) => ({
    queryKey: [query],
    queryFn: () => userApi.userControllerGetUserInfo({ ...query }),
  }),
});
