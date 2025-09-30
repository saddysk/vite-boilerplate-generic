import * as Sentry from '@sentry/react';
import { IAuthUser } from '@/modules/auth/types';
import CONFIG from '@/config/config';

export const initSentryUser = (user: IAuthUser) => {
  if (!CONFIG.VITE_SENTRY_DSN) {
    return;
  }

  Sentry.setUser({ email: user.email, id: user.id });
};
