import { useAuth } from '@/modules/auth';
import { useEffect } from 'react';
import { initSentryUser } from './sentry';

const Analytics = () => {
  const { state } = useAuth();
  // User Change
  useEffect(() => {
    if (state.user?.id && state.user?.email) {
      initSentryUser(state.user);
    }
  }, [state.user]);

  return <></>;
};

export default Analytics;
