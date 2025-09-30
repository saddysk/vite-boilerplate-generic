import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import constate from 'constate';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

export interface IUseAxiosState {
  token?: string;
  axiosInstance: AxiosInstance;
  onResponseError?: (error: AxiosError) => AxiosError | Promise<AxiosError> | null | Promise<AxiosResponse>;
  onRequestError?: (error: AxiosError) => AxiosError | Promise<AxiosError> | null;
  onRequest?: (request: AxiosRequestConfig) => AxiosRequestConfig;
  onResponse?: (response: AxiosResponse<unknown>) => AxiosResponse<unknown>;
}

const useAxiosState = (props: IUseAxiosState) => {
  const latestProps = useRef<IUseAxiosState>();

  useEffect(() => {
    latestProps.current = props;
  });

  const handleRequest = useCallback((config: AxiosRequestConfig): AxiosRequestConfig => {
    const headers: Record<string, string | number> = {
      // 'x-language': latestProps.current.lang,
    };

    if (latestProps.current.token) {
      headers.Authorization = `Bearer ${latestProps.current.token}`;
    }

    config.headers = {
      ...config.headers,
      ...headers,
    };

    return latestProps.current?.onRequest?.(config) ?? config;
  }, []);

  const handleResponse = useCallback((response: AxiosResponse<unknown>) => {
    return latestProps.current?.onResponse?.(response) ?? response;
  }, []);

  const handleRequestError = useCallback((error: AxiosError) => {
    return latestProps.current?.onRequestError != null
      ? latestProps.current.onRequestError(error)
      : Promise.resolve(error);
  }, []);

  const handleResponseError = useCallback((error: AxiosError) => {
    return latestProps.current?.onResponseError != null
      ? latestProps.current.onResponseError(error)
      : Promise.resolve(error);
  }, []);

  useLayoutEffect(() => {
    const reqInterceptor = props.axiosInstance.interceptors.request.use(handleRequest, handleRequestError);
    const resInterceptor = props.axiosInstance.interceptors.response.use(handleResponse, handleResponseError);

    return () => {
      props.axiosInstance.interceptors.request.eject(reqInterceptor);
      props.axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [handleRequest, handleResponseError, handleResponse, handleRequestError, props.axiosInstance]);

  return props.axiosInstance;
};

const [AxiosProvider, useAxios] = constate(useAxiosState);
AxiosProvider.displayName = 'AxiosProvider';

export { AxiosProvider, useAxios };
