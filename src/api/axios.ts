import CONFIG from '@/config/config';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export const globalAxios = axios.create({
  baseURL: CONFIG.VITE_API_BASE,
  headers: {
    // Global defaults
  },
});

// Make it available while not on production for developers
/*
 * Run API call in browser dev tools:
 * Example: window._globalAxios.get('/health-check');
 */
!CONFIG.PROD && typeof window !== 'undefined' && (window._globalAxios = globalAxios);
