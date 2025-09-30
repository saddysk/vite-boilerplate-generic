import { globalAxios } from '@/api/axios';
import { ErrorDto } from '@/api/data-contracts';
import { AxiosError } from 'axios';
import { FC, PropsWithChildren, useCallback } from 'react';
import { useAuth } from '../modules/auth';
import { AxiosProvider } from '../modules/axios/AxiosProvider';

const AxiosWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { state, logout } = useAuth();

  const onError = useCallback(
    (error: AxiosError) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = error.response.data as ErrorDto;

      if (data?.message && error.response?.status !== 401) {
        console.error(data.message);

        // toast.error(data.detail, {
        //   toastId: 'toastCustomMessage',
        // });
      }

      if (error.config && error.response?.status === 401 && error.config.url.indexOf('login') === -1) {
        // TODO: implement refresh-token

        logout({});
        return;
      }

      return Promise.reject(error);
    },
    [logout]
  );

  return (
    <AxiosProvider token={state.accessToken} axiosInstance={globalAxios} onResponseError={onError}>
      {children}
    </AxiosProvider>
  );
};

export default AxiosWrapper;
