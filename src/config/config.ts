import { cleanEnv, url, str, bool } from 'envalid';

const env = cleanEnv(import.meta.env, {
  PROD: bool({ default: false }),

  VITE_APP_ENV: str({ default: 'unknown', devDefault: 'local' }),
  VITE_API_BASE: url({ devDefault: 'http://localhost:3001' }),
  VITE_APP_VERSION: str({ default: 'unknown', devDefault: 'local' }),

  VITE_SENTRY_DSN: str({
    default: null,
    devDefault: null,
  }),
});

export const AppConfig = () => ({ ...env });

const CONFIG = AppConfig();

export default CONFIG;
