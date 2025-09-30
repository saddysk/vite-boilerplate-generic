import { FC, useCallback } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Analytics from '@/components/analytics/index';
import { AppRoutes } from '../routes';
import { AuthProvider } from '@/modules/auth';
import AxiosWrapper from './AxiosWrapper';
import { BrowserRouter } from 'react-router-dom';
import CONFIG from '@/config/config';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '@ui/sonner';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnMount: false,
      staleTime: 0,
      // retryOnMount: false,
      refetchOnWindowFocus: false,
      retry: CONFIG.PROD ? 2 : false,
    },
  },
});

const SPA: FC = () => {
  const onSignOut = useCallback(() => {
    queryClient.clear();
    queryClient?.removeQueries({
      predicate: () => true,
    });
  }, []);

  return (
    <>
      <AuthProvider onSingOut={onSignOut}>
        <AxiosWrapper>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
              }}>
              <AppRoutes />

              {/* Analytics */}
              <Analytics />
              {/* Toast */}
              <Toaster />
            </BrowserRouter>

            <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
          </QueryClientProvider>
        </AxiosWrapper>
      </AuthProvider>
    </>
  );
};

export default SPA;
