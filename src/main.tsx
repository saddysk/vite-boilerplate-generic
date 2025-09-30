import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
// Node Polyfills for Vite
import './polyfills';

import App from './App';
import CONFIG from './config/config';

if (CONFIG.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: CONFIG.VITE_SENTRY_DSN,
    // integrations: [
    //   new BrowserTracing(),
    //   new CaptureConsoleIntegration({
    //     // array of methods that should be captured
    //     // defaults to ['log', 'info', 'warn', 'error', 'debug', 'assert']
    //     levels: ['error'],
    //   }),
    // ],
    environment: CONFIG.VITE_APP_ENV,
    release: CONFIG.VITE_APP_VERSION,

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
