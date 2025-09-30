import { ErrorDto } from '@/api/data-contracts';
import { handleError } from '@/lib/utils/error';
import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Parameter<T extends (...args: any) => any> = Parameters<T>[0];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Parameter1<T extends (...args: any) => any> = Parameters<T>[1];
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export type Parameter2<T extends (...args: any) => any> = Parameters<T>[2];

type UseApiQuery = <
  TQueryFnData extends AxiosResponse = AxiosResponse,
  TError = unknown,
  TData extends AxiosResponse = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
) => UseQueryResult<TData, TError> & { key: TQueryKey; response?: TData['data'] | undefined };

export const useApiQuery: UseApiQuery = ({ queryKey, queryFn, ...options }) => {
  const queryOptions: typeof options = {
    ...options,
  };

  const onError = useCallback<(typeof options)['onError']>(
    (e) => handleError(e as unknown as AxiosError<ErrorDto>),
    []
  );

  const result = useQuery(queryKey, queryFn, {
    onError,
    ...queryOptions,
  });

  return {
    key: queryKey,
    ...result,
    response: result?.data?.data,
  };
};
